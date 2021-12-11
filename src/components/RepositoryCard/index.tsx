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
    id: string;
    name: string;
    type: 'public' | 'private'
    description: string;
    languages: string
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


export function RepositoryCard(){
    return (
        <Container>
            <Header>
                <Name>gitinfos</Name>
                
                    <Type>public</Type>
                
            </Header>

            <Description>Basic Mobile app that provides finances control throught aklsjdalsdjalsdjaslkdajslkdajsldkajsdklajskldajsdlkasjdlkasjdaklsjdaklsdjaklsdjalskdjaskldjaslkdjaslkdjasldkjasdlkasjdlkj...</Description>

            <Footer>
                <Icon name="circle" ></Icon>
                <ProgramingLanguage>Typescript</ProgramingLanguage>
            </Footer>

        </Container>
    )
}