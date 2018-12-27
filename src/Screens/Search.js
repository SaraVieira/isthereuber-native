import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { fixNameB } from '../utils/fixName'
import { search } from '../utils/algolia'
import Flag from 'react-native-flags'
import { Wrapper, Subtitle, Cities, List, City } from './Search.elements'

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search'
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

      this.setState(
        {
          cities: content.hits
        },
        this.checkCitiesLength
      )
    })
  }

  checkCitiesLength = () => {
    const cities = this.state.cities
    if (cities.length === 1) {
      this.props.navigation.push('City', {
        city: cities[0]
      })
    }

    this.timer = setTimeout(
      () =>
        this.setState({
          loaded: true
        }),
      600
    )
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer)
  }

  componentDidMount() {
    const city = this.props.navigation.state.params.city
    this.search(city)
  }

  render() {
    const { loaded, cities } = this.state
    const city = this.props.navigation.state.params.city

    return (
      <Wrapper>
        {!loaded ? (
          <ActivityIndicator size="large" color="#e8eaf6" />
        ) : (
          <>
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
                    <Text
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <City style={{ marginRight: 20 }}> {city.name}</City>

                      <Flag
                        type="flat"
                        code={city.info.country.short_name}
                        size={32}
                      />
                    </Text>
                  </TouchableOpacity>
                </List>
              ))}
            </Cities>
          </>
        )}
      </Wrapper>
    )
  }
}
