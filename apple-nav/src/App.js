import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/Header'

import menuData from './data'
import SubNavigation from './components/SubNavigation';

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
        <Header data={data} />
        {data.map(category => (
          <Route key={category.name} path={category.path} 
            render={props => <SubNavigation {...props} category={category} />}
          />
        ))}
        
      </AppContainer>
    )
  }
}

export default App;
