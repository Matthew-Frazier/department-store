import React from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import { Button, Header, Segment} from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = {
    department: {},
  }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data })
      });
  };

  render() {
    const {id} = this.props.match.params
    return(
        <Segment>
          <Header as="h1">{this.state.department.name}</Header>
          <br/>
          <br/>
          <Segment>
            <ProductList department_id={id}/>
          </Segment>
          <Button onClick={this.props.history.goBack}>
            Back
          </Button>
        </Segment>
    )
  }
}

export default DepartmentView;