import React from 'react'
import {
  Text,
  View,
  TextInput,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components/native'

export const Wrapper = styled(View)`
  background: #181743;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  flex-direction: column;
`

export const Label = styled(Text)`
  font-size: 50px;
  margin: 0;
  margin-top: 40px;
  font-weight: 600;
  color: #e8eaf6;
`

export const Input = styled(TextInput)`
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

export const InputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Algolia = styled(TouchableOpacity)`
  margin-top: 60px;
`
