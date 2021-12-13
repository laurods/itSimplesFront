import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export default function Update() {
    const {activeCNPJ, setEntradasByCNPJ } = useContext(AuthContext);
    const updateList = async () => {    
    const entradasByCNPJ = await axios.post('../pages/api/entradasbycnpj', { cnpj: activeCNPJ });        
    const listEntradasByCNPJ = entradasByCNPJ.data;
    setEntradasByCNPJ(listEntradasByCNPJ)
    }
    updateList();  
};
