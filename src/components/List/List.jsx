import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const List = ({items}) => {
    return (
        <ListContainer>
         {
             items && items.map(item => {
                 return(
                     <Card key={item.id} item={item} />
                   
                     
                 )
             })
         }   
        </ListContainer>
    )
}



const ListContainer = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;

padding: 1rem;
max-width: 1200px;
margin: 2rem auto;
/* outline: 1px solid #ddd; */

@media (min-width:900px){
    justify-content: flex-start;
}

`


export default List
