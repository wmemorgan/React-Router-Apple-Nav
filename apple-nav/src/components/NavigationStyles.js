import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from './StyleComponents/theme'

export const NavigationContainer = styled.nav`
  width: 100%;
  max-width: 1000px;
  ${flex('row', 'center', 'space-evenly')};
  font-size: ${fontSizing.s};

  @media ${breakpoints[1]} {
    ${flex('row','center','space-between')}
    width: 97%;
    
  }

`

export const ProductMenu = styled.div`
  width: 70%;
  ${flex('row', 'center', 'space-between')};

    @media ${breakpoints[1]} {
      display: none;
  }
`

export const MobileNavigationContainer = styled.nav`
  display: none;
  @media ${breakpoints[1]} {
    width: 100%;
    height: 100vh;
    ${flex('column', 'center', 'center')};
    margin-top: 200px;
    position: fixed;
    z-index: 5;
    
    font-size: ${fontSizing.sm};
    background: #000000;
  }
}`

export const ProductMenuMobile = styled.div`

    @media ${breakpoints[1]} {
      width: 70%;
      ${flex('column')};
      margin-top: 100px;

      a {
        width: 100%;
        padding: 15px 0;
        border-top: 1px solid ${colorScheme.defaultBorderColor};
      }

      a:first-child {
        border-top: none;
      }
  }
`

export const SubNavigationContainer = styled.nav`
  width: 100%;
  ${flex('column','center','center')}
  padding: 20px;
  background: ${color.primaryBgShading};
  font-size: ${fontSizing.s};
`

export const MenuContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  ${flex('row', 'center', 'space-evenly')};

  @media ${breakpoints[0]} {
    ${flex('column', 'center', 'center')}
  }
`

export const MenuOption = styled.div`
  ${flex('column','center','center')};
  text-align: center;

  & * {
    color: ${color.primaryColor};
    font-size: ${fontSizing.xs};
    text-decoration: none;
  }

`

export const ImageContainer = styled.div`
  width: 54px;  
  height: 54px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 54px;
  }
`



export default NavigationContainer