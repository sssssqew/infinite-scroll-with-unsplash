import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  border: 2px solid black;
  padding: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background: black;
    color: white;
  }

  /* 여러줄의 css 코드를 설정해야 하는 경우 */
  ${props => props.dark && css` 
    background: black;
    color: white;
    width: ${props.width || ''};

    &:hover{
      background: white;
      color: black;
    }
  `}
`

function TestComponent(){
  return (
    <>
      <Button>사랑합니다 호갱님</Button>
      <Button dark={true} width='50%'>사랑합니다 호갱님</Button>
    </>
  )
}
export default TestComponent