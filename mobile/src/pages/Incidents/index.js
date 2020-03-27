import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
    Container,
    Header,
    HeaderText,
    HeaderTextBold,
    Logo,
    Title,
    Description,
    IncidentsList,
    Incident,
    IncidentProperty,
    IncidentValue,
    Button,
    TextButton,
} from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents', {
            params: { page },
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <Container>
            <Header>
                <Logo />
                <HeaderText>
                    Possui um total de{' '}
                    <HeaderTextBold>{total} casos</HeaderTextBold>.
                </HeaderText>
            </Header>
            <Title>Bem-vindo!</Title>
            <Description>
                Escolha um dos casos abaixo e salve o dia.
            </Description>
            <IncidentsList
                data={incidents}
                keyExtractor={(incident) => String(incident.id)}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item }) => (
                    <Incident>
                        <IncidentProperty>ONG:</IncidentProperty>
                        <IncidentValue>{item.ong.name}</IncidentValue>

                        <IncidentProperty>CASO:</IncidentProperty>
                        <IncidentValue>{item.title}</IncidentValue>

                        <IncidentProperty>VALOR:</IncidentProperty>
                        <IncidentValue>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(item.value)}
                        </IncidentValue>

                        <Button
                            onPress={() =>
                                navigation.navigate('Detail', { item })
                            }
                        >
                            <TextButton>Ver mais detalhes</TextButton>
                            <Icon
                                name="arrow-forward"
                                size={16}
                                color="#e02041"
                            />
                        </Button>
                    </Incident>
                )}
            />
        </Container>
    );
}
