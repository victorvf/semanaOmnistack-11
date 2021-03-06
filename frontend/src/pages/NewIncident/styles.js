import styled from 'styled-components';

import logo from '../../assets/logo.svg';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Section = styled.section`
    width: 100%;
    max-width: 380px;

    h1 {
        margin: 64px 0 32px;
        font-size: 32px;
    }

    p {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        font-weight: 500;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }

        svg {
            margin-right: 8px;
        }
    }
`;

export const Logo = styled.img.attrs({
    src: logo,
})``;

export const Form = styled.form`
    width: 100%;
    max-width: 450px;

    input,
    textarea {
        margin-top: 8px;

        &:first-child {
            margin-top: 0;
        }
    }

    textarea {
        width: 100%;
        min-height: 140px;
        resize: vertical;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(90%);
    }
`;
