import styled, { css } from 'styled-components'
import { fontSizing, flex, breakpoints } from './theme'

const ShopIcon = styled.div`
@media ${breakpoints[2]} {
    display: ${props => !props.toggle ? 'flex' : 'none'};
    z-index: 10;
} 

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

    @media ${breakpoints[1]} {
      order: 1;
      font-size: ${fontSizing.sm};
    }


`

export default ShopIcon