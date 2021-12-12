import React from "react";

import { useEffect, useState } from "react";

import { ItemBar } from "../../components/ItemBar";
import { RepositoryCard } from "../../components/RepositoryCard";

import {api} from "../../services/api"

import { UserDTO } from "../../../dtos/UserDTO";
import { RepoDTO } from "../../../dtos/RepoDTO";

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
    ResumBar,
    RepositoryList
} from "./styles";



export function Home(){
    const [barInfo, setBarInfo] = useState<UserDTO>();
    const [dataRepositories, setDataRepositories] = useState<RepoDTO[]>([]);

    const data = 
    {
    repositories: {
        title: 'Repositories',
        num: barInfo?.public_repos
    },
    followers: {
        title: 'Followers',
        num: barInfo?.followers
    },
    following : {
        title: 'Following',
        num: barInfo?.following
    }
    };


    const data2 = [{
        name: 'data',
        type: 'public',
        description: 'este repositorio é para um teste que eu to fazendo pra dudu pra eu ganhar 6 mil reais',
        languages: 'Typescript'
        },
        {
            name: 'gitinfos',
            type: 'public',
            description: 'este repositorio é para um teste que eu to fazendo pra dudu pra eu ganhar 6 mil reais',
            languages: 'Typescript'
        },
        {
            name: 'gitinfos',
            type: 'public',
            description: 'este repositorio é para um teste que eu to fazendo pra dudu pra eu ganhar 6 mil reais',
            languages: 'Typescript'
        },
        {
            name: 'gitinfos',
            type: 'public',
            description: 'este repositorio é para um teste que eu to fazendo pra dudu pra eu ganhar 6 mil reais',
            languages: 'Typescript'
            },
        {
        name: 'gitinfos',
        type: 'public',
        description: 'este repositorio é para um teste que eu to fazendo pra dudu pra eu ganhar 6 mil reais',
        languages: 'Typescript'
        },
        {
            name: 'gitinfos',
            type: 'public',
            description: 'este repositorio é para um teste que eu to fazendo pra dudu pra eu ganhar 6 mil reais',
            languages: 'Typescript'
            },

    ];

    useEffect(() => {
        async function fetchResumBar(){
            try {
                const response = await api.get(''); 
                 setBarInfo(response.data);
            } catch (error) {
                console.log(error);    
            }
        }
        fetchResumBar()

        async function fetchRepositories(){
            try {
                const response = await api.get('/repos'); 
                setDataRepositories(response.data);
                
                 await console.log(dataRepositories);
            } catch (error) {
                console.log(error);    
            }
        }
        fetchRepositories()
    },[]);
    
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
                <ItemBar data={data.repositories}/>
                <ItemBar data={data.followers}/>
                <ItemBar data={data.following}/>
            </ResumBar>

            <Repositories>
                <RepositoryList 
                    data={dataRepositories}
                    // keyExtractor={item => (item.id)}
                    renderItem={({item}) => (<RepositoryCard data = {item}/>) }
                />
            </Repositories>
        </Container>
    )
}