import { createContext, useState, useEffect} from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
//import api from '/services/api';
import axios from 'axios';

const jwt = require('jsonwebtoken');

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [reportCNPJ, setReportCNPJ] = useState('');
    const [activeCNPJ, setActiveCNPJ] = useState('');
    const [theProductsFilteredSelected, setTheProductsFilteredSelected] = useState([]);
    const [produtosBaixarEstoque, setProdutosBaixarEstoque] = useState([]);
    const [products, setProducts] = useState([]);
    const [devices, setDevices] = useState([]);
    const [anual, setAnual] = useState([]);
    const [mensal, setMensal] = useState([]);
    const [diario, setDiario] = useState([]);
    const [saldos, setSaldos] = useState([]);
    const [all, setAll] = useState([]);
    const [CNPJsByUsers, setCNPJsByUsers] = useState([]);
    const [dasByCNPJ, setDasByCNPJ] = useState([]);
    const [movimentosCNPJ, setMovimentosCNPJ] = useState([]);
    const [entradasByCNPJ, setEntradasByCNPJ] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isUserADM, setIsUserADM] = useState(false);
    const [loginMessage, setloginMessage] = useState('');
    const [showMessage, setshowMessage] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const isAuthenticated = !!userId;

    const verifyToken = () =>{
        console.log(userId);
        const { 'itToken': token} = parseCookies();
      
        if(token){
            const decoded = jwt.verify(token, 'abcdefg');
            console.log(decoded.id);
            setUserId(decoded.id);
            setUserEmail(decoded.email);
            setUserRole(decoded.role);
            setIsAuthenticated(true);
        }
    }


    useEffect(() => {
        verifyToken();      
    }, []);
    
    async function signIn(values) {
        axios.post('/api/login', values).then(res => {
            const {message, token, _id, role}  = res.data;

            if(message) {
                setloginMessage(message)
                setshowMessage(true);
            }
            if(token){
                setshowMessage(false); 
                setCookie(undefined, 'itToken', token, { // id e e-mail
                    maxAge: 60 * 60 * 24 * 360, // 1 ano
                    path: '/',
                });
                setCookie(undefined, 'idUser', _id, { // id
                    maxAge: 60 * 60 * 24 * 360, // 1 ano
                    path: '/',
                });
                setCookie(undefined, 'roleUser', role, { // id
                    maxAge: 60 * 60 * 24 * 360, // 1 ano
                    path: '/',
                });
                setUserId(_id);
                setIsAuthenticated(true);
                setUserRole(role); 
                window.location.reload() // atualiza a pagina

            }
            console.log(res.status);
                         
          });        
    }

    async function addEmpresa(values) {        
        values.user = userId;      
        api.post('cnpj', values).then(res => {
            console.log(res.data)                      
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
    const sair = () => {        
        destroyCookie(null, 'idUser');
        destroyCookie(null, 'itToken');

    }

    const telaCheia = () => {        
        const doc = window.document;
        const docEl = doc.documentElement;
      
        const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
      
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
          requestFullScreen.call(docEl);
        }
        else {
          cancelFullScreen.call(doc);
        }
    }


    return (
        <AuthContext.Provider value={{ 
            showMessage, 
            loginMessage, 
            userId,
            userEmail,
            userRole, 
            isAuthenticated,
            isUserADM,
            movimentosCNPJ,
            CNPJsByUsers,
            activeCNPJ,
            entradasByCNPJ,
            dasByCNPJ,
            anual,
            mensal,
            diario,
            saldos,
            all,
            products,
            theProductsFilteredSelected,
            produtosBaixarEstoque,
            devices,          
            signIn,
            addEmpresa,
            setCNPJsByUsers,
            getMovimentosByCNPJ,
            setActiveCNPJ,
            updateActiveCNPJ,
            setMovimentosCNPJ,
            reportByMovimentoAndCNPJ,
            setEntradasByCNPJ,
            setDasByCNPJ,
            setAnual,
            setMensal,
            setDiario,
            setSaldos,
            setAll,
            setProducts,
            setTheProductsFilteredSelected,
            sair,
            telaCheia,
            setProdutosBaixarEstoque,
            setDevices,
            setIsUserADM,     
            
             }}>
            {children}
        </AuthContext.Provider>
    )
}