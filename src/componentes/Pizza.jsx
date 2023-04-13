import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Pizza = () => {

    const { id } = useParams();
    const { getPizza } = useContext();
    const pizza = getPizza(id);

    return (
        <div>
            <img src={pizza.img} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>{pizza.desc}</p>
            <ul>
                {pizza.ingredientes.map((ingredientes, index) =>(
                    <li key={index.toString()}>{ingredientes}</li>
                ))}
            </ul>
            <div>
                <p>$ {pizza.price}</p>
                <Button>Añadir:</Button>
            </div>
        </div>
    )
}

export default Pizza