import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Departments from './components/Departments';
import DepartmentsForm from './components/DepartmentsForm';
import DepartmentView from './components/DepartmentView';
import ProductForm from './components/ProductForm';
import NoMatch from './components/NoMatch';
import styled from 'styled-components';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <DepartmentsContainer>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/new" component={DepartmentsForm} />
          <Route exact path="/departments/:id" component={DepartmentView} />
          <Route exact path="/departments/:department_id/products/new" component={ProductForm} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </DepartmentsContainer>
  </>
);

const DepartmentsContainer = styled.div`
background: rgb(173,173,173);
background: linear-gradient(45deg, rgba(173,173,173,1) 25%, rgba(238,238,238,1) 50%, rgba(173,173,173,1) 75%);
`;

export default App;
