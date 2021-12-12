import React from "react";
import { Text } from "react-native";
import { 
    Container,
    Header,
    Name,
    Type,
    Description,
    Footer,
    Icon,
    ProgramingLanguage
} from "./style";

interface RepositoryDataProps {
    name: string;
    visibility: string;
    description: string;
    language: string
}

interface props {
    data: RepositoryDataProps
}

// var obj = {
//     "tipo_entrega_id" : ["Valor não é válido"],
//     "outro_campo"  : ["valor deve ser preenchido"]
  
//   }
//   console.log(Object.keys(obj)[0]); 


// function firstInObject(obj)
// {
//         for (var key in obj) return obj[key];
// }


export function RepositoryCard( {data}: props ){
    return (
        <Container>
            <Header>
                <Name>{data.name}</Name>
                
                    <Type>{data.visibility}</Type>
                
            </Header>

            <Description>{data.description}</Description>

            <Footer>
                <Icon name="circle" ></Icon>
                <ProgramingLanguage>{data.language}</ProgramingLanguage>
            </Footer>

        </Container>
    )
}