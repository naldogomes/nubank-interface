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
    let offset = 0;
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

    function setOffset(){
        offset = 0;
    }

    function onHandlerStateChanged(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;
      
            offset += translationY;
      
            if (translationY >= 100) {
              opened = true;
            } else {
              translateY.setValue(offset);
              translateY.setOffset(0);
              offset = 0;
            }
       
            Animated.timing(translateY, {
              toValue: opened ? 370 : 0,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              offset = opened ? 370 : 0;
              translateY.setOffset(offset);
              translateY.setValue(0);
            });
        }
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
                            <Icon name="visibility-off" size={28} color="#665" onPress={() => setOffset()} />
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