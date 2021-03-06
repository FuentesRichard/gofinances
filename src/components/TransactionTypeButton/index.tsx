import React from 'react';
import { TouchableOpacityProps } from 'react-native'; 

import { 
    Container,
    Icon,
    Title
} from './styles';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface IProps extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export function TransactionTypeButton({
    isActive,
    type,
    title, 
    ...rest
}: IProps) {
    return(
        <Container 
        {...rest} 
        type={type}
        isActive={isActive}>
            <Icon 
            name={icons[type]}
            type={type}
             />
            <Title>{title}</Title>
        </Container>
    );
}