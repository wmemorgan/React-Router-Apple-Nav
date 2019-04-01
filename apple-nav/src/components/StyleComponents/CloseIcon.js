import styled from 'styled-components'
import { flex, breakpoints } from './theme'

const CloseIcon = styled.div`
  z-index: 10;
  display: ${props => !props.toggle ? 'none' : 'inline-block'};
  font-family: ${props => props.theme.fontStyles.logoFont};
  cursor: pointer;

  i {
      color: ${props => props.theme.colorScheme.headerFontColor};
      background: ${props => props.theme.colorScheme.headerBgColor};
      font-size: ${props => props.theme.fontSizing.sm};
  }

  a {
    ${flex('column', 'flex-end', 'center')};
  }

  @media ${breakpoints[0]} {
    display: none;
  }

`

export default CloseIcon