import React from 'react';
import Select from 'react-select';
import NameLabel from './NameLabel';
import Controller from './Controller';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // state = {
  //   selectedOption: null,
  // }

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tekdar Dhanit',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Engineer Dhanit',
      });
    }, 2000);
  }

  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    // const { selectedOption } = this.state;

    const { name } = this.state;
    return (
      <div>
        <h1>Hello</h1>
      </div>

    );
  }
}

export default App;
