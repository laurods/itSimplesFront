import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import TopMobile from '../components/dashboard/topMobile';
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
      
      <TopMobile />
      <ViewMainMobile />  
      </>
    );
    
}
