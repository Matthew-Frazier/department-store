import React, { useState, useEffect, } from 'react'
import axios from 'axios';
import { Header, Button, Card, Icon, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Departments = (props) => {
  const [departments, setDepartments] = useState([]);

  useEffect( () => {
    axios.get("/api/departments")
      .then( res => {
        setDepartments(res.data)
      })
  }, []);

  const deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        setDepartments({ departments: departments.filter( d => d.id !== id ), })
      })
  }

  const renderDepartment = () => {
    if (departments.length <= 0)
      return <Header as="h3">No Departments</Header>
    return departments.map( department => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Button.Group fluid>
            <Button as={Link} to={`/departments/${department.id}`} color="blue">
              View
            </Button>
            <Button icon color="red" onClick={() => deleteDepartment(`${department.id}`)}>
              <Icon name="trash"/> Delete
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    ));
  };

  return(
    <div>
      <Header as="h1" textAlign="center">Departments</Header>
      <hr/>
      <Button as={Link} to="/departments/new">Add A Department</Button>
      <br/>
      <br/>
      <Card.Group>
        { renderDepartment() }
      </Card.Group>
    </div>
  )
}

export default Departments;