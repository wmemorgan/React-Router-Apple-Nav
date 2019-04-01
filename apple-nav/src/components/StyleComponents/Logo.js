import styled, { css } from 'styled-components'
import { flex } from './theme'

const Logo = styled.div`
    z-index: 10;
    font-family: ${props => props.theme.fontStyles.logoFont};
    font-size: ${props => props.theme.fontSizing.l};
    font-weight: bold;
 
    ${props => 
      props.main &&
      css`
        text-align: center;
    `}

    a {
      ${flex('column', 'flex-end', 'center')};
    }
`

export default Logo