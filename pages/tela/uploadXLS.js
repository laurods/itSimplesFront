import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Top from '../../components/dashboard/top.js';
import ContentXLS from '../../components/dashboard/contentXLS.js';

export default function UploadXML() {
    const { isAuthenticated } = useContext(AuthContext);
     
    return (      <>
      
      {isAuthenticated && <Top />}
      {isAuthenticated && <ContentXLS />}       
      </>
    );
    
}
