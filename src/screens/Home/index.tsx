import React from "react";
import { View, Text, TextComponent } from "react-native";
import { Repository } from "../../components/Repository";
import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    LogoutButton,
    Icon,
    Repositories
} from "./styles";

export function Home(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/42879994?v=4' }}/>
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Lucas</UserName>
                        </User> 
                        </UserInfo>
                        <LogoutButton onPress={() => {}}>
                            <Icon name="power"/>
                        </LogoutButton>                   
                </UserWrapper>
            </Header>
            <Repositories>
                <Text>asdasdasd</Text>
            </Repositories>
        </Container>
    )
}