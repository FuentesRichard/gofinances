import styled, {css} from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface IIconProps {
    type: 'up' | 'down';
}

interface IContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(RectButton)<IContainerProps>`
    width: 48%;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 5px;

    padding: 16px;

    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.sucess_light};
    `};
    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
    `};
`;

export const Icon = styled(Feather)<IIconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.sucess : theme.colors.attention};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular}
    font-size: ${RFValue(14)}px;
`;