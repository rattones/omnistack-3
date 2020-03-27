import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const [ email, setEmail ]= useState('');

    const history= useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response= await api.post('login', {email});

            localStorage.setItem('ongId', response.data.id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (err) {
            alert('Falha no login, tente novamente mais tarde');
        }
    }
    return (
        <>
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="Be The Hero" />

                    <form onSubmit={handleLogin}>
                        <h1>Faça seu logon</h1>

                        <input placeholder="Seu Email" 
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#e02041" />
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
                <img src={heroesImg} alt="Heroes"/>
            </div>
        </>
    );
}