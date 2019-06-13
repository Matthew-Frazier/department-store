import React, { useState, useEffect, } from 'react'
import axios from 'axios';
import { Header, Button, Card, Icon, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const {department_id} = props
    axios.get(`/api/departments/${department_id}/products`)
      .then( res => {
        setProducts(res.data)
      })
  }, []);

  const deleteProduct = (id) => {
    const department_id = props.department_id
    axios.delete(`/api/departments/${department_id}/products/${id}`)
      .then( res => {
        setProducts(products.filter(d => d.id !== id))
      })
  }

  const renderProducts = () => {
    if (products.length <= 0)
      return <Header as="h3">No Products</Header>
    return products.map( product => (
      <Card key={product.id}>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <p>{product.description}</p>
          <Card.Header as="h3">${product.price}</Card.Header>
          <Button floated="right" icon color="red" onClick={() => deleteProduct(product.id)}>
            <Icon name="trash"/> Delete
          </Button>
        </Card.Content>
      </Card>
    ));
  };

  return(
    <div>
      <Header as="h1" textAlign="center">Products</Header>
      <hr/>
      <Button as={Link} to={`/departments/${props.department_id}/products/new`}>Add A Product</Button>
      <br/>
      <br/>
      <Card.Group>
        { renderProducts() }
      </Card.Group>
    </div>
  )
}

export default ProductList;