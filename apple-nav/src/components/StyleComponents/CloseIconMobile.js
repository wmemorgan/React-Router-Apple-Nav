import styled from 'styled-components'
import { flex, breakpoints } from './theme'

const CloseIconMobile = styled.div`
    display: none;
    @media ${breakpoints[1]} {
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
    }
`

export default CloseIconMobile