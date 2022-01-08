import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../components/login/login.js'
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function UploadXML() {
     
    return (      <>
      
      {isAuthenticated && <Top />}
      {isAuthenticated && <Content />}       
      </>
    );
    
}
