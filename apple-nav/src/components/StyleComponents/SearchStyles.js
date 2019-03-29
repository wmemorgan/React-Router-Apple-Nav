import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, fontStyles, flex, breakpoints } from './theme'

export const SearchIcon = styled.div`
     
    font-family: ${props => props.theme.fontStyles.logoFont};
    font-size: ${props => props.theme.fontSizing.l};
    font-weight: bold;
    ${props => 
      props.toggle &&
      css`
        display: none;
    `}

    a {
      ${flex('column', 'flex-end', 'center')};
    }

    @media ${breakpoints[1]} {
      display: none;
    }
`

export const SearchIconOff = styled.div`
     
    font-family: ${props => props.theme.fontStyles.logoFont};
    font-size: ${props => props.theme.fontSizing.l};
    font-weight: bold;
    ${props => 
      props.toggle &&
      css`
        display: inline-block;
    `}

    a {
      ${flex('column', 'flex-end', 'center')};
    }
`

export const SearchFieldContainer = styled.div`
  z-index: 30;
  @media ${breakpoints[2]} {
    display: ${props => !props.toggle ? 'none' : 'flex'};
    width: 70%;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    
    color: ${colorScheme.defaultFontColor};
    background: ${color.primaryColor};
    font-family: ${fontStyles.defaultFont};
    border-radius: 5px;
  }


  @media ${breakpoints[1]} {
    display: none;
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

export const SearchFieldContainerMobile = styled.div`

@media ${breakpoints[1]} {
  display: ${props => !props.toggle ? 'none' : 'flex'};
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  padding: 2px 15px;
  
  color: ${colorScheme.defaultFontColor};
  background: ${color.primaryColor};
  font-family: ${fontStyles.defaultFont};
  border-radius: 5px;
}


  @media ${breakpoints[2]} {
    display: none;

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