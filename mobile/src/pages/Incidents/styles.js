import styled from 'styled-components/native';

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

export const HeaderText = styled.Text`
    font-size: 15px;
    color: #737380;
`;

export const HeaderTextBold = styled.Text`
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-top: 48px;
    margin-bottom: 16px;
    color: #13131a;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: #737380;
`;

export const IncidentsList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 24px;
`;

export const Incident = styled.View`
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

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`;
