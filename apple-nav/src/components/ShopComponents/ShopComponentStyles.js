import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../StyleComponents/theme'

export const ShopIcon = styled.div`
  @media ${breakpoints[2]} {
      display: ${props => !props.toggle ? 'flex' : 'none'};
      z-index: 10;
  } 

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

  @media ${breakpoints[1]} {
    order: 1;
    font-size: ${fontSizing.sm};
  }
`

export const ShopModalContainer = styled.div`
  display: ${props => !props.shop ? 'none' : 'block'}
  top: 65px;
  right: 50px;
  position: fixed;
  overflow: hidden;
  z-index: 20;
  width: 200px;
  margin: 0 auto;
  padding: 5px;
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

export default ShopIcon