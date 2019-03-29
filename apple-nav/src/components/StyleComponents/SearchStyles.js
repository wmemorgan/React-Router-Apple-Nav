import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, fontStyles, flex, breakpoints } from './theme'

export const SearchIcon = styled.div`
  display: ${props => props.hide ? 'none' : 'flex'};
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
      display: ${props => props.show ? 'flex' : 'none'};
    }
    
`

export const SearchFieldContainer = styled.div`
  display: ${props => props.show ? 'flex': 'none'};
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;

  color: ${colorScheme.defaultFontColor};
  background: ${color.primaryColor};
  font-family: ${fontStyles.defaultFont};
  border-radius: 5px;

  @media ${breakpoints[1]} {
    width: 90%;
    margin-top: 100px;
    padding: 2px 15px;
  }

  input {
    width: 100%;
    background: ${color.primaryColor};
    padding: 10px;
    border-radius: 10px;
    font-family: ${fontStyles.defaultFont};
    font-size: ${fontSizing.sm};
    font-weight: normal;
    border: none;
  }







`

export default SearchIcon