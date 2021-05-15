import React from 'react';
import Card from './Card.js';
import CardTwo from './CardTwo'

const CardList = ({robots}) => {
    const cardComponent = robots.map((user,index) => {
        if(index%2===0){
        return <Card key={index}  
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}/>}
        else {
            return <CardTwo key={index} 
                    id={robots[index].id} 
                    name={robots[index].name} 
                    email={robots[index].email}/>}
    })
    return (
    <div>
        {cardComponent}
    </div>
    );
}

export default CardList;