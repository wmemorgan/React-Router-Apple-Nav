import styled from 'styled-components'
import { colorScheme, flex } from './StyleComponents/theme'

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  ${flex('row','center','space-evenly')}
  padding: 10px;
  background: ${colorScheme.headerBgColor};

  & * {
    color: ${colorScheme.headerFontColor};
    text-decoration: none;
  }
`

export default HeaderContainer