import React from 'react'
import { Text, TouchableOpacity, View, Linking, Platform } from 'react-native'
import Confetti from 'react-native-confetti-view'
import {
  Wrapper,
  CityName,
  Title,
  Message,
  Alternative,
  Company,
  Subtitle,
  GoBack
} from './City.elements'
import edgeCases from '../utils/edgeCases'
import { getAppStoreLink } from '../utils/appStores'

class City extends React.Component {
  static navigationOptions = {
    title: null,
    headerTransparent: true,
    headerTintColor: '#fff'
  }

  state = {
    message: null
  }

  componentDidMount() {
    // if (this._confettiView) {
    //   this._confettiView.startConfetti()
    // }

    edgeCases(this.props.navigation.state.params.city).then(message =>
      this.setState({ message })
    )
  }

  render() {
    const city = this.props.navigation.state.params.city || { company: [] }
    const { message } = this.state
    const hasUber = city.company.includes('uber')

    return (
      <Confetti count={hasUber ? 100 : 0}>
        <Wrapper>
          {hasUber ? (
            <>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`https://www.uber.com${city.link}`)
                }
              >
                <Title>YES 🚗</Title>
              </TouchableOpacity>
              <CityName>Matches {city.info.formatted_address}</CityName>
              {message ? <Message>{message}</Message> : null}
            </>
          ) : (
            <Title>NO 😕</Title>
          )}
          {city.company.filter(item => item !== 'uber').length ? (
            <>
              {hasUber ? (
                <Subtitle>There is also</Subtitle>
              ) : (
                <Subtitle>But there is</Subtitle>
              )}

              <Alternative row>
                {city.company
                  .filter(item => item !== 'uber')
                  .map(c => {
                    return (
                      <TouchableOpacity
                        onPress={async () => {
                          const link = await getAppStoreLink(c, Platform.OS)
                          Linking.openURL(link)
                        }}
                        key={c}
                      >
                        <Company>{c}</Company>
                      </TouchableOpacity>
                    )
                  })}
              </Alternative>
            </>
          ) : null}
          <TouchableOpacity onPress={() => this.props.navigation.push('Home')}>
            <GoBack>Search Again 🔎</GoBack>
          </TouchableOpacity>
        </Wrapper>
      </Confetti>
    )
  }
}

export default City
