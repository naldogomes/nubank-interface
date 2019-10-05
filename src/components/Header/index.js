import React from 'react';
import { Text } from 'react-native'

import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png'

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source ={logo} />
                <Title>Naldo</ Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}