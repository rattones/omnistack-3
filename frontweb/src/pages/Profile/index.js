import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import Incident from '../../components/Incident';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {

    const [ incidents, setIncidents ] = useState([]);

    const history= useHistory();

    const ongId= localStorage.getItem('ongId');
    const ongName= localStorage.getItem('ongName');

    useEffect(() => {
        console.log(ongId);
        
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            console.log(response);
            setIncidents(response.data);
        })
    }, [ongId]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <dir className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, <strong>{ongName}</strong></span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={() => handleLogout()}>
                    <FiPower size={18} color="#e0201" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <Incident key={incident.id} data={incident} />
                ))}
           </ul>
        </dir>
    );
}