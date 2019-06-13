import React, { useState, useEffect, } from 'react'
import axios from 'axios';
import styled from 'styled-components';
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
        setDepartments(departments.filter(d => d.id !== id))
      })
  }

  const renderDepartment = () => {
    if (departments.length <= 0)
      return <Header as="h3">No Departments</Header>
    return departments.map( department => (
      <StyledCard key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Button.Group fluid>
            <Button icon as={Link} to={`/departments/${department.id}`} color="blue">
            <Icon name="eye"/> View
            </Button>
            {/* <Button as={Link} to={"/departments/new"} >
              Edit
            </Button> */}
            <Button icon color="red" onClick={() => deleteDepartment(department.id)}>
              <Icon name="trash"/> Delete
            </Button>
          </Button.Group>
        </Card.Content>
      </StyledCard>
    ));
  };

  return(
    <div>
      <Header as="h1" textAlign="center">Departments</Header>
      <hr/>
      <StyledButton as={Link} to="/departments/new">Add A Department</StyledButton>
      <br/>
      <br/>
      <Card.Group>
        { renderDepartment() }
      </Card.Group>
    </div>
  )
}



const StyledButton = styled(Button)`
  display: flex;
  background: green;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  width: 200px;
  border-radius: 5px;

  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
`; 

const StyledCard = styled(Card)`  
  background: rgb(250,204,6) !important;
  background: linear-gradient(45deg, rgba(250,204,6,1) 25%, rgba(255,252,204,1) 50%, rgba(250,204,6,1) 75%) !important;
`;

export default Departments;