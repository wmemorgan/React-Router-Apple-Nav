import React, { Component } from 'react';

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/Header'

import menuData from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: menuData})
  }

  render() {
    return (
      <AppContainer>
        <Header data={this.state.data}/>
      </AppContainer>
    )
  }
}

export default App;
