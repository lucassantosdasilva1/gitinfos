import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    width: 100%;

    justify-content: center;
    align-items: center;

`;

export const Num = styled.Text`
    font-size: 14px;
    color: ${( {theme} ) => theme.colors.text};
    font-family: ${( {theme} ) => theme.fonts.medium};
`;

export const Title = styled.Text`
    margin-top: 6px;
    
    font-size: 14px;
    font-family: ${( {theme} ) => theme.fonts.medium};

    color: ${( {theme} ) => theme.colors.text};
`;