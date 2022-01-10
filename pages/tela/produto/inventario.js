import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthContext';
import Login from '../../../components/login/login.js'
import Top from '../../../components/dashboard/top.js';
import Inventario from '../../../components/dashboard/inventario'
export default function Dashboard() {
     const {isAuthenticated, activeCNPJ, setProducts } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{        
        const products = await axios.post('/api/getAllProducts', { cnpj: activeCNPJ });              
        const listProducts = products.data;
        setProducts(listProducts);
                
      }
      loadAll();
    }, []);

    return (
      <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Top />}
      {isAuthenticated && <Inventario />}       
      </>
    );
    
}
