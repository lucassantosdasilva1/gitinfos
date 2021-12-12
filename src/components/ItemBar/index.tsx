import React from "react";
import { Container, Title, Num} from "./style";

interface ItemProps {
    title: string;
    num: number;
}

interface dataProps {
    data: ItemProps;
}



export function ItemBar( {data} : dataProps ) {
    return (
        <Container>
            <Num>{data.num}</Num>
            <Title>{data.title}</Title>
        </Container>
    )
}