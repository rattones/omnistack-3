import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

// import './styles.css';

export default function Incident(incident) {

    const history= useHistory();

    const ongId= localStorage.getItem('ongId');

    async function handleDelete(id) {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            }).then((response) => {
                if (response.status === 204) {
                    history.go('/profile');
                }
            })
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente mais tarde');
        }
    }

    return (
        <li id={`incident_${incident.data.id}`}>
            <strong>Caso:</strong>
            <p>{incident.data.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.data.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.data.value)}</p>

            <button type="button" onClick={() => handleDelete(incident.data.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
            </button>
        </li>
    );
}

