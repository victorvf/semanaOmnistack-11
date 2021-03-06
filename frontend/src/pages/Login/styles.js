import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionForm = styled.section`
    width: 100%;
    max-width: 350px;
`;

export const Form = styled.form`
    margin-top: 100px;

    h1 {
        font-size: 32px;
        margin-bottom: 32px;
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

export const HeroesImg = styled.img.attrs({
    src: heroesImg,
})``;

export const Button = styled.button.attrs({
    type: 'submit',
})`
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
