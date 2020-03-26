import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import {
    Container,
    SectionForm,
    Logo,
    Form,
    HeroesImg,
    Button,
} from './styles';

export default function Login() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('falha no login');
        }
    }

    return (
        <Container>
            <SectionForm>
                <Logo />
                <Form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        type="text"
                        placeholder="sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <Button>Entrar</Button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </Form>
            </SectionForm>
            <HeroesImg />
        </Container>
    );
}
