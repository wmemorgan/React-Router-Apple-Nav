import styled, { css } from 'styled-components'
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
  display: ${props => !props.toggle ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;

  @media ${breakpoints[0]} {
      display: none;
  }
`

export const MobileNavigationContainer = styled.nav`
  display: none;

  @media ${breakpoints[0]} {
    width: 100%;
    display: ${props => props.show ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    position: fixed;
    z-index: 5;
    font-size: ${fontSizing.sm};
    background: #000000;
}
`

export const ProductMenuMobile = styled.div`

    @media ${breakpoints[0]} {
      width: 70%;
      display: ${props => !props.toggle ? 'none': 'flex'};
      flex-direction: column;

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
  padding: 10px;
  background: ${props => props.darkmode ? color.primaryDark : color.primaryBgShading};
  font-size: ${fontSizing.s};

  ${props =>
    props.lightmode &&
    css`
      background: white;
  `}
`

export const MenuContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  ${flex('row', 'flex-start', 'space-evenly')};

  @media ${breakpoints[0]} {
    ${flex('column', 'center', 'center')}
  }
`

export const MenuOption = styled.div`
  
  text-align: center;

  & * {
    color: ${props => props.darkmode ? color.lightText : color.primaryColor};
    font-size: ${fontSizing.xs};
    text-decoration: none;
  }

`

export const ImageContainer = styled.div`
  width: 54px;  
  height: 54px;
  margin: 0 auto;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 54px;
  }
`

export const NewItem = styled.div`
  margin: 10px 0;
  color: ${color.danger};
  font-size: ${fontSizing.xxs};
`


export default NavigationContainer