import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Loading } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Load = ({ onLoad }) => {
  onLoad()
  return (
    <Wrapper>
      <Loading />
    </Wrapper>
  )
}


export default Load
