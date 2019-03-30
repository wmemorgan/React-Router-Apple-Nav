import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, fontStyles, flex, breakpoints } from '../StyleComponents/theme'

export const SearchIcon = styled.div`
    display: flex;
    flex-direction: 'column';
    align-items: 'center';
    justify-content: 'flex-end'; 
    font-family: ${props => props.theme.fontStyles.logoFont};
    font-size: ${props => props.theme.fontSizing.l};
    font-weight: bold;
    cursor: pointer;
   
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
    display: flex;
    flex-drection: column;
    align-items: 'center';
    justify-content: 'flex-end'; 
    font-family: ${props => props.theme.fontStyles.logoFont};
    font-size: ${props => props.theme.fontSizing.l};
    font-weight: bold;

`

export const SearchFieldContainer = styled.div`
  display: ${props => !props.toggle ? 'none' : 'flex'};
  width: 70%;
  height: 40px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 20;
  color: ${colorScheme.defaultFontColor};
  background: ${color.primaryColor};
  font-family: ${fontStyles.defaultFont};
  border-radius: 5px;

  @media ${breakpoints[0]} {
    display: none;
  }

  input {
    width: 100%;
    height: 40px;
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

export const SearchModalContainer = styled.div`
  display: ${props => !props.show ? 'none' : 'block'}
  top: 65px;
  left: 30%;
  position: fixed;
  overflow: hidden;
  z-index: 20;
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  background: ${color.lightText};

  & * {
    margin: 5px 0;
    text-decoration: none;
    list-style-type:none
    color: ${colorScheme.defaultFontColor};
    font-size: ${fontSizing.s};
  }

  @media ${breakpoints[1]} {
    display: none;
  }
`

export default SearchIcon