import { createContext, useState, useEffect} from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import api from '/services/api';
const jwt = require('jsonwebtoken');

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [reportCNPJ, setReportCNPJ] = useState('');
    const [activeCNPJ, setActiveCNPJ] = useState('');    
    const [CNPJsByUsers, setCNPJsByUsers] = useState([]);
    const [movimentosCNPJ, setMovimentosCNPJ] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loginMessage, setloginMessage] = useState('');
    const [showMessage, setshowMessage] = useState(false);
    const isAuthenticated = !!userId;
    const verifyToken = () =>{
        console.log('aki');
        console.log(userId);
        const { 'itToken': token} = parseCookies();
      
        if(token){
            const decoded = jwt.verify(token, 'abcdefg');
            console.log(decoded.id);
            setUserId(decoded.id);
            setUserEmail(decoded.email);
            
        }
    }

    useEffect(() => {
        verifyToken();
        
        
    }, []);

    async function signIn(values) {
        api.post('login', values).then(res => {
            const {message, token, _id}  = res.data;

            if(message) {
                setloginMessage(message)
                setshowMessage(true);
            }
            if(token){
                setshowMessage(false); 
                setCookie(undefined, 'itToken', token, { // id e e-mail
                    maxAge: 60 * 60 * 24, // 24 hours
                    path: '/',
                });
                setCookie(undefined, 'idUser', _id, { // id
                    maxAge: 60 * 60 * 24, // 24 hours
                    path: '/',
                });
                setUserId(_id);
                Router.push('/dashboard');


            }
            console.log(res.status);                
          });        
    }

    async function addCNPJ(values) {        
        values.user = userId;
        console.log(values);
        
        api.post('cnpj', values).then(res => {
            //const {message, token, _id}  = res.data;            
            console.log(res.status);                
          });   
    }

    async function getMovimentosByCNPJ(value) {
             const objCNPJ = {
                 cnpj: value,
             }        
             console.log(value);
             console.log(objCNPJ);
        
        api.post('dashboard/movimentosbycnpj', objCNPJ).then(res => {            
            setMovimentosCNPJ(res.data)
            console.log(res.data);            
            console.log(res.status);                
          });   
    }

    async function updateActiveCNPJ(cnpj) {      
        setReportCNPJ(cnpj)
    }

    async function reportByMovimentoAndCNPJ(movimento) {
        Router.push({
            pathname:'http://localhost:3001/report',
            query: { movimento, cnpj: reportCNPJ =='' ? activeCNPJ : reportCNPJ},

        })
}


    return (
        <AuthContext.Provider value={{ 
            showMessage, 
            loginMessage, 
            userId,
            userEmail, 
            isAuthenticated,
            movimentosCNPJ,
            CNPJsByUsers,
            activeCNPJ,
            signIn,
            addCNPJ,
            setCNPJsByUsers,
            getMovimentosByCNPJ,
            setActiveCNPJ,
            updateActiveCNPJ,
            setMovimentosCNPJ,
            reportByMovimentoAndCNPJ,
            
             }}>
            {children}
        </AuthContext.Provider>
    )
}