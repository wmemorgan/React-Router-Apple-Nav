import styled from 'styled-components'
import { fontSizing, flex, breakpoints } from './StyleComponents/theme'

const NavigationContainer = styled.nav`
  width: 90%;
  max-width: 1000px;
  ${flex('row', 'center', 'space-evenly')}
  font-size: ${fontSizing.s};

  @media ${breakpoints[0]} {
    ${flex('column','center','center')}
  }

`

export default NavigationContainer