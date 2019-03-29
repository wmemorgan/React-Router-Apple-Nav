import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Search from './components/Search'
import SubNavigation from './components/SubNavigation'


import { menu, shop, search } from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      shopData: [],
      searchData: [],
      supportData: [],
      toggle: false
    }
  }

  componentDidMount() {
    this.setState({
      data: menu,
      shopData: shop,
      searchData: search,
      toggle: false
    })
  }

  // Open and close specific navigation elements
  toggleDisplay = () => {
    this.setState(prevState => (
      { toggle: !prevState.toggle
      }
    ))
  }

  render() {
    const { data, shopData, searchData } = this.state

    return (
      <AppContainer>
        <Header 
          data={data} 
          toggle={this.state.toggle}
          toggleDisplay={this.toggleDisplay}
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
