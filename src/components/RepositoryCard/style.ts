import styled from "styled-components/native";
import {FontAwesome} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;

    padding: 9px 24px;
    margin-bottom: ${RFValue(16)};
`;

    export const Header = styled.View` 
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
    `;
        export const Name = styled.Text`
            font-size: 14px;
            font-family: ${({theme}) => theme.fonts.bold};
            color: ${({theme}) => theme.colors.text};
        `;

        export const Type = styled.Text`
            margin-bottom: 3px;
            color: ${({theme}) => theme.colors.text_gray}; 
        `;

    export const Description = styled.Text.attrs({
        numberOfLines: 1
    })`
        margin-top: 6px;
        font-size: 12px;
    `;

    export const Footer = styled.View`
        margin-top: 8px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `;
        export const Icon = styled(FontAwesome)`
            margin-right: 6px;
            color: ${({theme}) => theme.colors.text};
        `;
        export const ProgramingLanguage = styled.Text`
            font-size: 14px;
        `;