import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 20px;
        margin-left: 24px;
    }
`;

export const Logo = styled.img.attrs({
    src: logo,
})`
    height: 64px;
`;

export const ButtonNew = styled(Link)`
    width: 260px;
    margin-left: auto;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 0;
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

export const ButtonPower = styled.button`
    height: 60px;
    width: 60px;
    border: 1px solid #dcdce6;
    border-radius: 6px;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
        border-color: #999;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        position: relative;

        button {
            position: absolute;
            right: 24px;
            top: 24px;
            border: 0;
            transition: opacity 0.2s;
            background: #fff;

            &:hover {
                opacity: 0.8;
            }
        }

        strong {
            display: block;
            margin-bottom: 16px;
            color: #41414d;
        }

        p {
            color: #737380;
            line-height: 21px;
            font-size: 16px;
        }

        p + strong {
            margin-top: 32px;
        }
    }
`;
