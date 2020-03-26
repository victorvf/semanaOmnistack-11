import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import {
    Container,
    Header,
    Logo,
    ButtonNew,
    ButtonPower,
    List,
} from './styles';

export default function Profile() {
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        async function loadIncidents() {
            const response = await api.get('/ong/incidents', {
                headers: {
                    Authorization: ongId,
                },
            });

            setIncidents(response.data);
        }

        loadIncidents();
    }, [ongId]);

    async function handleDelete(id) {
        try {
            await api.delete(`/incident/${id}/delete`, {
                headers: {
                    Authorization: ongId,
                },
            });

            setIncidents(incidents.filter((i) => i.id !== id));
        } catch (err) {
            alert('tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <Container>
            <Header>
                <Logo />
                <span>Bem vinda, {ongName}</span>

                <ButtonNew to="/incidents/new">Cadastrar novo caso</ButtonNew>
                <ButtonPower onClick={() => handleLogout()}>
                    <FiPower size={18} color="#e02041" />
                </ButtonPower>
            </Header>

            <h1>Casos cadastrados</h1>

            <List>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(incident.value)}
                        </p>

                        <button
                            type="button"
                            onClick={() => handleDelete(incident.id)}
                        >
                            <FiTrash2 size={16} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </List>
        </Container>
    );
}
