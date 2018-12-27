import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Flag from 'react-native-flags'
import {
  Wrapper,
  Subtitle,
  Cities,
  List,
  City,
  CityWrapper
} from './Search.elements'

export default class Search extends React.Component {
  static navigationOptions = {
    title: null,
    headerTransparent: true,
    headerTintColor: '#fff'
  }

  render() {
    const cities = this.props.navigation.state.params.cities

    return (
      <Wrapper>
        <Subtitle>More than one city matches your search</Subtitle>
        <Subtitle>What city did you mean ?</Subtitle>
        <Cities>
          {cities.map(city => (
            <List key={city.info.place_id}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('City', {
                    city
                  })
                }
              >
                <CityWrapper>
                  <City style={{ marginRight: 10 }}> {city.name}</City>

                  <Flag
                    type="flat"
                    code={city.info.country.short_name}
                    size={32}
                  />
                </CityWrapper>
              </TouchableOpacity>
            </List>
          ))}
        </Cities>
      </Wrapper>
    )
  }
}
