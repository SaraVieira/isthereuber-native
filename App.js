import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import styled from 'styled-components/native'
import logo from './assets/logo.png'

const Wrapper = styled(View)`
  background: #181743;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`

const Label = styled(Text)`
  font-size: 50px;
  margin: 0;
  margin-top: 40px;
  font-weight: 600;
  color: #e8eaf6;
`

const Input = styled(TextInput)`
  border-bottom-width: 1px;
  border-bottom-color: #e8eaf6;
  background: transparent;
  font-size: 50px;
  height: 80px;
  font-weight: 600;
  width: 300px;
  max-width: 90%;
  color: #e8eaf6;
  padding: 0 10px;
`

const InputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
`

const Logo = styled(Image)`
  width: 200px;
  height: 200px;
`

export default class App extends React.Component {
  state = {text: ''};
  render() {
    return (
      <Wrapper>
        <Logo source={logo} />
        <Label>
          Is there Uber in
        </Label>
        <InputWrapper>
          <Input
            onChangeText={(text) => this.setState({text})}
          />
          <Label style={{ marginLeft: 10}}>?</Label>
        </InputWrapper>

      </Wrapper>
    )
  }
}