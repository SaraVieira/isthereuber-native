import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const Subtitle = styled(Text)`
  color: #e8eaf6;
  font-size: 40px;
  text-align: center;
`

export const Wrapper = styled(View)`
  display: flex;
  background: #181743;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`

export const List = styled(View)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-direction: row;
`

export const City = styled(Text)`
  font-size: 24px;
  color: #e8eaf6;
  margin-right: 10px;
`

export const Cities = styled(View)`
  margin-top: 40px;
`

export const CityWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
