import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/Header'
import Home from './components/Home'
import SubNavigation from './components/SubNavigation'

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
        <Header data={data} />
        <Route exact path="/" component={Home}/>
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
