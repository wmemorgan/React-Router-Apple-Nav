import styled from 'styled-components'
import { color, fontSizing, flex, breakpoints } from './StyleComponents/theme'

const NavigationContainer = styled.nav`
  width: 90%;
  max-width: 1000px;
  ${flex('row', 'center', 'space-between')};
  font-size: ${fontSizing.s};
  @media ${breakpoints[0]} {
    ${flex('column','center','center')}
  }

`

export const SubNavigationContainer = styled.nav`
  width: 100%;
  ${flex('row', 'center', 'space-evenly')};
  padding: 10px;
  background: ${color.primaryBgShading};
  font-size: ${fontSizing.s};
 
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