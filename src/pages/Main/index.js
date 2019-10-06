import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Tabs from '../../components/Tabs'

import {
        Container,
        Content,
        Card,
        CardHeader,
        Left,
        AccountType,
        CardContent,
        CardFooter,
        Title,
        Description,
        Annotation,
} from './styles'

export default function Main() {

    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChanged(event) {
    
    }

    return (
        <Container>
            <Header/>

            <Content>
                <Menu translateY={translateY}/>

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <Card
                    style={{
                        transform: [{
                          translateY: translateY.interpolate({
                              inputRange: [-350, 0, 370],
                              outputRange: [-50, 0, 370],
                              extrapolate: 'clamp',
                          }),
                        }],
                      }}
                    >
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
                </PanGestureHandler>
            </Content>
            
            <Tabs translateY={translateY}/>
        </Container>
    )
}