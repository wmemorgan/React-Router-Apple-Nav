import styled, { css } from 'styled-components'
import { flex, breakpoints } from './theme'

export const SearchIcon = styled.div`
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
      display: none;
    }
    
`

export default SearchIcon