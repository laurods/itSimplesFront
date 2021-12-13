import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function Update() {
    const updateList = async () => {
    const {activeCNPJ, setEntradasByCNPJ } = useContext(AuthContext);
    const entradasByCNPJ = await axios.post('../pages/api/entradasbycnpj', { cnpj: activeCNPJ });        
    const listEntradasByCNPJ = entradasByCNPJ.data;
    setEntradasByCNPJ(listEntradasByCNPJ)
    }
    updateList();  
};

module.exports = {
    Update
};