import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/arcondicionado/top';
import ViewMainMobile from '../components/dashboard/viewMainMobile';


export default function Dashboard() {
     const {
             
       
       } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        
                       
      }
      loadAll();
    }, []);

    return (
      <>
      
      <Top />
      <ViewMainMobile />  
      </>
    );
    
}
