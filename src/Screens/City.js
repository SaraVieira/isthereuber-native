import React from 'react'
import { Text, TouchableOpacity, View, Linking, Platform } from 'react-native'
import Confetti from 'react-native-confetti'
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
  componentDidMount() {
    if (this._confettiView) {
      this._confettiView.startConfetti()
    }
  }

  render() {
    const city = this.props.navigation.state.params.city

    return (
      <Wrapper>
        {city.company.includes('uber') ? (
          <>
            <Confetti
              confettiCount={200}
              size={1}
              ref={node => (this._confettiView = node)}
            />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://www.uber.com${city.link}`)
              }
            >
              <Title>YES 🚗</Title>
            </TouchableOpacity>
            <CityName>Matches {city.info.formatted_address}</CityName>
            <Message>{edgeCases(city)}</Message>
          </>
        ) : (
          <Title>NO 😕</Title>
        )}
        {city.company.filter(item => item !== 'uber').length ? (
          <>
            {city.company.includes('uber') ? (
              <Subtitle>There is also</Subtitle>
            ) : (
              <Subtitle>But there is</Subtitle>
            )}

            <Alternative row>
              {city.company
                .filter(item => item !== 'uber')
                .map(c => (
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(getAppStoreLink(c, Platform.OS))
                    }
                    key={c}
                  >
                    <Company>{c}</Company>
                  </TouchableOpacity>
                ))}
            </Alternative>
          </>
        ) : null}
        <TouchableOpacity onPress={() => this.props.navigation.push('Home')}>
          <GoBack>Search Again 🔎</GoBack>
        </TouchableOpacity>
      </Wrapper>
    )
  }
}

export default City
