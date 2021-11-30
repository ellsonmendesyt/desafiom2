import React from 'react'
import { CardContainer,CardHeader,CardBody,CardFooter,CardTitle } from './Card.styles'

const Card = ({item}) => {
    return (
        <CardContainer >
            <CardHeader>
             <CardTitle>{item.plano}</CardTitle>
            </CardHeader>
            <CardBody>
             <p>{item.detalhes}</p>
            </CardBody>
            <CardFooter>

            </CardFooter>
        </CardContainer>
        
    )
}

export default Card
/*

 "id":1,
         "plano":"Internet 100MB",
         "categoria":"internet",
         "franquia":"100MB",
         "preco":39.90,
         "detalhes":" "
*/