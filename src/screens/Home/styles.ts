import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"
import theme from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons"


export const Container = styled.View`
    flex: 1;
    background-color: #011001;
    margin-top: ${getStatusBarHeight()}px;

    flex-direction: column;
`;

    export const Header = styled.View`
        width: 100%;
        height: ${RFPercentage(20)}px;

        background-color: ${({theme}) => theme.colors.primary};

        align-items: flex-start;
        justify-content: center;
        
    `;

        export const UserWrapper = styled.View`
            width: 100%;

            padding: 0 24px;
            
            

            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
        `;

            export const UserInfo = styled.View`
                align-items: center;
                flex-direction: row;
            `;

                export const Photo = styled.Image`
                    width: ${RFValue(48)}px;
                    height: ${RFValue(48)}px;

                    border-radius: 10px;
                `;

                export const User = styled.View`
                    margin: 0 20px;
                    
                `;

                    export const UserGreeting = styled.Text`
                        font-size: ${RFValue(14)}px;
                        font-family: ${({theme}) => theme.fonts.regular};
                        color: ${({theme}) => theme.colors.secondary};
                    `;

                    export const UserName = styled.Text`
                        font-size: ${RFValue(14)}px;
                        font-family: ${({theme}) => theme.fonts.bold};
                        color: ${({theme}) => theme.colors.secondary};
                    `;

            export const LogoutButton = styled(BorderlessButton)`
                
            `;

                export const Icon = styled(Feather)`
                color: ${({theme}) => theme.colors.text};
                font-size: ${RFValue(24)}px;
            `;

    export const Repositories = styled.View`
        
        width: 100%;
        position: absolute;
        background-color: red;
    `;