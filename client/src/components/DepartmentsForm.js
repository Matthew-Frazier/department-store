import React from "react";
import axios from "axios";
import { Form, Header,  } from 'semantic-ui-react';

class DepartmentsForm extends React.Component {
  defaultValues = { name: "", }
  state = { ...this.defaultValues }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/departments", { ...this.state, })
      .then( res => {
        this.props.history.push("/departments")
      })
    this.setState({ ...this.defaultValues, })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  render() {
    return(
      <div>
        <Header as="h1">New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            name="name"
            placeholder="Department Name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentsForm;