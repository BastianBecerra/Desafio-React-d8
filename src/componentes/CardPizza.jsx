import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Navegacion from "./Navegacion";

const CardComponentes = () => {
    const [pizza, setPizza] = useState([]);

    const CategoriaPizza = async () => {
        const url = "/pizzas.json"
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
        console.log(url)
    }
    
    useEffect(() =>{
        CategoriaPizza();
    }, []);

    return(
        <>
            <section key={pizza.id}>
                {pizza.map((pizzas) => {
                    return(
                        <Card style={{width: '18rem'}}>
                        <img src={pizzas.img} alt="" style={{width: '18rem'}} />
                        <Card.Body>
                          <Card.Title>{pizzas.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>Ingredientes: 
                            <p>{pizzas.ingredients}</p>
                          </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary" onClick={() => Navegacion('/pizza/' + pizzas.id)}>Ver mas...</Button>
                            {" "}
                            <Button variant="danger">Añadir</Button>
                        </Card.Body>
                      </Card>
                    )
                })}
            </section>
        </>
    )
}

export default CardComponentes
