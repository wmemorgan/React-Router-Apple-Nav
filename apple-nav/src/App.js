import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/SearchComponents/Search'
import Shop from './components/ShopComponents/Shop'

import SubNavigation from './components/SubNavigation'


import { menu, shop, search } from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: menu,
      shopData: shop,
      searchData: search,
      supportData: [],
      toggle: false,
      show: false,
      shop: false
    }
  }

  componentDidMount() {
    this.setState({
      data: menu,
      shopData: shop,
      searchData: search,
      toggle: false,
      show: false,
      shop: false
    })
  }

  // Open and close specific navigation elements
  toggleDisplay = () => {
    this.setState(prevState => (
      { toggle: !prevState.toggle
      }
    ))
  }

  toggleModal = () => {
    console.log(`clicked on toggleModal!`)

    this.setState(prevState => (
      { show: !prevState.show }
    ))

    this.toggleDisplay()
  }

  toggleShopModal = () => {
    console.log(`clicked on toggleModal!`)

    this.setState(prevState => (
      { shop: !prevState.shop }
    ))

    // this.toggleDisplay()
  }

  render() {
    const { data, shopData, searchData } = this.state

    return (
      <AppContainer>
        <Header 
          {...this.state}
          toggleDisplay={this.toggleDisplay}
          toggleModal={this.toggleModal}
          toggleShopModal={this.toggleShopModal}
        />
        
        
        {/* Define routes */}
        <Route exact path="/" component={Home}/>
        {/* Define routes to menu items */}
        {data.map(category => (
          <Route key={category.name} path={category.path} 
            render={props => 
              <SubNavigation 
                {...props} 
                category={category} 
                darkmode={category.name === 'TV'}
                lightmode={category.name === 'Watch'}
              />}
          />
        ))}

        <Route 
          path="/shop"
          render={props => <Shop {...props} category={shopData[0]} />} 
        />
        <Route 
          path="/search"
          render={props => <Search {...props} category={searchData[0]} />} 
        />
      </AppContainer>
    )
  }
}

export default App;
