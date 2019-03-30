import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../StyleComponents/theme'

export const ShopIcon = styled.div`
  display: ${props => !props.toggle ? 'flex' : 'none'};
  z-index: 2;
  font-family: ${props => props.theme.fontStyles.logoFont};
  font-size: ${props => props.theme.fontSizing.l};
  font-weight: bold;
  cursor: pointer;

  ${props => 
    props.main &&
    css`
      text-align: center;
  `}

  a {
    ${flex('column', 'flex-start', 'center')};
  }

  @media ${breakpoints[0]} {
    display: flex;
    order: 1;
    font-size: ${fontSizing.sm};
  }
`

export const ShopModalContainer = styled.div`
  display: ${props => !props.shop ? 'none' : 'flex'}
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 65px;
  right: 10px;
  z-index: 3;
  width: 25%;
 
  background: ${color.lightText};
  overflow: hidden;

  & * {
    text-decoration: none;
    list-style-type:none
    color: dodgerblue;
    font-size: ${fontSizing.s};
  }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      margin-top: 50px;
      margin-bottom: 20px;

      li {
          width: 70%;
          padding: 10px;
          border-top: 1px solid ${colorScheme.defaultBorderColor};
      }
 
    }

  @media ${breakpoints[0]} {
    width: 100%;
    display: ${props => !props.shop ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    
  }
`

export default ShopIcon