import React from "react";

import { ItemBar } from "../../components/ItemBar";
import { RepositoryCard } from "../../components/RepositoryCard";

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
    Repositories,
    ResumBar
} from "./styles";

const data = {

}

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

            <ResumBar>
                <ItemBar title={'Repositories'} num={'5'}/>
                <ItemBar title={'Followers'} num={'1'}/>
                <ItemBar title={'Following'} num={'0'}/>
            </ResumBar>

            <Repositories>
                {/* <RepositoryList 
                    data={data}
                    keyExtractor={item => (item.id)}
                    renderItem={({item}) => (<RepositoryCard data = {item}/>) }
                ></RepositoryList> */}

                <RepositoryCard></RepositoryCard>
                <RepositoryCard></RepositoryCard>
                <RepositoryCard></RepositoryCard>
                <RepositoryCard></RepositoryCard>
                <RepositoryCard></RepositoryCard>
                <RepositoryCard></RepositoryCard>
            </Repositories>
        </Container>
    )
}