import styled from 'styled-components'
import { color, fontSizing, flex } from './StyleComponents/theme'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${flex('column','center')};
  padding: 20px;
  color: ${color.lightText};
  background: ${color.primaryDark};
  font-size: ${fontSizing.l};
`

export default HomeContainer