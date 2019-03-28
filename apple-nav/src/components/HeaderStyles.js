import styled from 'styled-components'
import { colorScheme, flex } from './StyleComponents/theme'

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  ${flex('row','center','space-evenly')}
  color: ${colorScheme.headerFontColor};
  background: ${colorScheme.headerBgColor};
  padding: 10px;
`

export default HeaderContainer