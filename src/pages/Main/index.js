import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Tabs from '../../components/Tabs'

import { Container, Content, Card, CardHeader, Left, AccountType, CardContent, CardFooter, Title, Description, Annotation } from './styles'

export default function Main() {
    return (
        <Container>
            <Header/>

            <Content>
                <Menu />

                <Card>
                    <CardHeader>
                        <Left>
                            <Icon name="attach-money" size={28} color="#665" />
                            <AccountType>NuConta</AccountType>
                        </Left>
                        <Icon name="visibility-off" size={28} color="#665" />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 60.224,65</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Trasferência de R$ 60.000,00 recebida de GG.bet LTDA em 05 de OUT
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs/>
        </Container>
    )
}