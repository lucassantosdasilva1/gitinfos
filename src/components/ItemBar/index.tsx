import React from "react";
import { Container, Title, Num} from "./style";

interface dataItemProps {
    title: string;
    num: string;
}



export function ItemBar( {title, num} : dataItemProps ) {
    return (
        <Container>
            <Num>{num}</Num>
            <Title>{title}</Title>
        </Container>
    )
}