import styled from 'styled-components'
import { color, colorScheme, flex } from './StyleComponents/theme'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  ${flex('row','center','space-evenly')}
  color: ${colorScheme.headerFontColor};
  background: ${colorScheme.headerBgColor};
  padding: 10px;
`