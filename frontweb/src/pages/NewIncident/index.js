import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident() {

    const [ title, setTitle ]= useState('');
    const [ description, setDescription ]= useState('');
    const [ value, setValue ]= useState('');

    const history= useHistory();

    const ongId= localStorage.getItem('ongId');

    async function handleSubmit(event) {
        event.preventDefault();

        const data= {
            title, description, value
        };

        try {
            const response = await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente mais tarde');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
 
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhamente para encontrar heróis para ajudar a resolver.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" /> Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleSubmit}>
                    <input placeholder="Título do caso"
                        value={title}
                        onChange={event=> setTitle(event.target.value)}
                    />
                    <textarea placeholder="Descriçao"
                        value={description}
                        onChange={event=> setDescription(event.target.value)}
                    ></textarea>
                    <input type="number" precision="2" placeholder="Valor em R$"
                        value={value}
                        onChange={event=> setValue(event.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}