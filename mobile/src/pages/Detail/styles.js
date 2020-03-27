import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import logo from '../../assets/logo.png';

export const Logo = styled.Image.attrs({
    source: logo,
})``;

export const Container = styled.View`
    flex: 1;
    padding-horizontal: 24px;
    padding-top: 20px;
    background: #dcdce6;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TouchIcon = styled.TouchableOpacity``;

export const IncidentContainer = styled.View`
    background: #fff;
    border: 0;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 16px;
    margin-top: 24px;
`;

export const ButtonsContainer = styled.View`
    background: #fff;
    border: 0;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`;

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
`;

export const Title = styled.Text`
    color: #13131a;
    font-size: 25px;
    font-weight: bold;
`;

export const Description = styled.Text`
    margin-top: 15px;
    font-size: 15px;
    color: #737380;
`;

export const ButtonContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled(RectButton)`
    border-radius: 8px;
    background: #e02041;
    height: 50px;
    width: 48%;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;
