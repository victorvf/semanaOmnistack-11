import React from 'react';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Header,
    Logo,
    TouchIcon,
    IncidentContainer,
    IncidentProperty,
    IncidentValue,
    Title,
    Description,
    ButtonsContainer,
    ButtonContainer,
    Button,
    ButtonText,
} from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.item;
    const text = `Ola ${incident.ong.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$${incident.value}`;

    function sendMail() {
        const mail = {
            subject: `Herói do caso: ${incident.title}`,
            recipients: incident.ong.email,
            body: text,
        };

        Linking.openURL(
            `mailto:${mail.recipients}?subject=${mail.subject}&body=${mail.body}`
        );
    }

    function sendWhatsapp() {
        const message = {
            text,
            phone: incident.ong.whatsapp,
        };

        Linking.openURL(
            `whatsapp://send?text=${message.text}&phone=${message.phone}`
        );
    }

    return (
        <Container>
            <Header>
                <Logo />
                <TouchIcon onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={25} color="#e02041" />
                </TouchIcon>
            </Header>
            <IncidentContainer>
                <IncidentProperty>ONG:</IncidentProperty>
                <IncidentValue>{incident.ong.name}</IncidentValue>

                <IncidentProperty>CASO:</IncidentProperty>
                <IncidentValue>{incident.title}</IncidentValue>

                <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
                <IncidentValue>{incident.description}</IncidentValue>

                <IncidentProperty>VALOR:</IncidentProperty>
                <IncidentValue>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(incident.value)}
                </IncidentValue>
            </IncidentContainer>
            <ButtonsContainer>
                <Title>Salve o dia!</Title>
                <Title>Seja o herói desse caso.</Title>
                <Description>Entre em contato:</Description>
                <ButtonContainer>
                    <Button onPress={sendWhatsapp}>
                        <ButtonText>Whatsapp</ButtonText>
                    </Button>
                    <Button onPress={sendMail}>
                        <ButtonText>E-mail</ButtonText>
                    </Button>
                </ButtonContainer>
            </ButtonsContainer>
        </Container>
    );
}
