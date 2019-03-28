import React, { Component } from 'react';
import { Route } from 'react-router-dom'

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
    const { data } = this.state
    return (
      <AppContainer>
        {data.map(category => (
          <Route key={category.name} path={category.path} />
        ))}
        <Header data={data}/>
      </AppContainer>
    )
  }
}

export default App;
