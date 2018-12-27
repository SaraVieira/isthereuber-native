import styled from 'styled-components/native'
import { View, Text, TouchableOpacity } from 'react-native'

export const Wrapper = styled(View)`
  display: flex;
  background: #181743;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Title = styled(Text)`
  color: #e8eaf6;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
`

export const Subtitle = styled(Text)`
  color: #e8eaf6;
  font-size: 40px;
  margin-top: 40px;
  text-align: center;
`

export const Message = styled(Text)`
  color: #e8eaf6;
  font-size: 18px;
  max-width: 80%;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`

export const CityName = styled(Text)`
  font-size: 16px;
  color: white;
  text-align: center;
`

export const Company = styled(Text)`
  color: #e8eaf6;
  margin-top: 20px;
  font-weight: bold;
  z-index: 99;
  font-size: 24px;
  padding: 0;
  text-transform: capitalize;
  margin-bottom: 20px;
  margin-right: 20px;
`

export const Flex = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-wrap: wrap;

  p:not(:last-child) {
    padding-right: 20px;
  }

  flex-direction: ${props => (props.row ? 'row' : 'column')};
`

export const Alternative = styled(Flex)`
  a:not(:last-child) {
    padding-right: 20px;
  }
`
export const GoBack = styled(Text)`
  color: #e8eaf6;
  z-index: 99;
  width: 100%;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
  margin-top: 60px;
`
