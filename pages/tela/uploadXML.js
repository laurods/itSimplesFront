import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Top from '../../components/dashboard/top.js';
import Content from '../../components/dashboard/content.js';

export default function UploadXML() {
    const { isAuthenticated } = useContext(AuthContext);
     
    return (      <>
      
      {isAuthenticated && <Top />}
      {isAuthenticated && <Content />}       
      </>
    );
    
}
