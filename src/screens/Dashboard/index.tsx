import React from 'react';
import { HighlightComponent } from '../../components/HighlightCard';


import { 
    Container,
    Header, 
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName, 
    Icon,
    HighlightCards
} from './styles'

export function Dashboard() {
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/81183340?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Richard</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/>
                </UserWrapper>
            </Header>
            <HighlightCards>
                    <HighlightComponent 
                    type='up'
                    title='Entradas' 
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 18 de janeiro'
                    />
                    <HighlightComponent 
                    type='down'
                    title='Saídas' 
                    amount='R$ 1.259,00' 
                    lastTransaction='Última saída dia 19 de janeiro'
                    />
                    <HighlightComponent 
                    type='total'
                    title='Total' 
                    amount='R$ 16.141,00' 
                    lastTransaction='16 à 31 de janeiro'
                    />

            </HighlightCards>
        </Container>
    ) 
};