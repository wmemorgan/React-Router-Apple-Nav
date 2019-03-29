import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import SubNavigation from './components/SubNavigation'

import { menu, shop } from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      shopData: [],
      supportData: []
    }
  }

  componentDidMount() {
    this.setState({
      data: menu,
      shopData: shop
    })
  }

  render() {
    const { data, shopData } = this.state
    return (
      <AppContainer>
        <Header data={data} />
        <Route exact path="/" component={Home}/>
        {data.map(category => (
          <Route key={category.name} path={category.path} 
            render={props => <SubNavigation {...props} category={category} />}
          />
        ))}
        <Route 
          path="/shop"
          render={props => <Shop {...props} category={shopData[0]} />} 
        />
      </AppContainer>
    )
  }
}

export default App;
