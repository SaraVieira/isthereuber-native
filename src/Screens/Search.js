import React from 'react'
import { Text } from 'react-native'
import { fixNameB } from '../utils/fixName'
import { search } from '../utils/algolia'
import uniqBy from 'lodash.uniqby'
import Flag from 'react-native-flags'
import { Wrapper, Subtitle, Cities, List, City } from './Search.elements'

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
    header: null
  }

  state = {
    cities: [],
    loaded: false
  }

  search = city => {
    search(city, (err, content) => {
      if (err) {
        this.setState({
          loaded: true
        })
        console.error(err)
        return
      }

      this.setState({
        cities: content.hits,
        loaded: true
      })
    })
  }

  componentDidMount() {
    const city = this.props.navigation.state.params.city
    this.search(city)
  }

  render() {
    // link: `/${fixNameB(city.name)}`
    const { loaded, cities } = this.state
    const city = this.props.navigation.state.params.city
    return (
      <Wrapper>
        <Subtitle>More than one city matches your search</Subtitle>
        <Subtitle>What city did you mean ?</Subtitle>
        <Cities>
          {uniqBy(cities, 'name').map(city => (
            <List key={city.place_id}>
              <City> {city.name}</City>
              <Text>
                <Flag
                  type="flat"
                  code={city.info.country.short_name}
                  size={32}
                />
              </Text>
            </List>
          ))}
        </Cities>
      </Wrapper>
    )
  }
}
