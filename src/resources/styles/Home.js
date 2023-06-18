import React from 'react'
import styled from 'styled-components/native'


const StyledView = styled.View`
  background-color: papayawhip;
`


const StyledText = styled.Text`
  color: #BF4F74;
`


class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    )
  }
}