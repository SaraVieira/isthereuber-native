import React from 'react'
import { Image, Linking, ActivityIndicator } from 'react-native'
import logo from '../../assets/logo.png'
import AlgoliaLogo from '../../assets/algolia.png'
import {
  Wrapper,
  Label,
  Input,
  InputWrapper,
  Logo,
  Algolia
} from './Home.elements'
import { fixNameB } from '../utils/fixName'
import { search } from '../utils/algolia'

export default class Home extends React.Component {
  state = { text: '', loading: false, cities: [] }

  static navigationOptions = {
    title: 'Home',
    header: null
  }

  search = () => {
    this.setState({
      loading: true
    })
    search(this.state.text, (err, content) => {
      if (err) {
        this.setState({
          loading: false
        })
        console.error(err)
        return
      }

      this.setState(
        {
          cities: content.hits,
          loading: false
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
    } else {
      this.props.navigation.push('Search', {
        cities: cities
      })
    }
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer)
  }

  render() {
    const { loading } = this.state
    return (
      <Wrapper>
        <Logo source={logo} />
        <Label>Is there Uber in</Label>
        <InputWrapper>
          <Input
            onSubmitEditing={this.search}
            onChangeText={text => this.setState({ text })}
          />
          <Label style={{ marginLeft: 10 }}>?</Label>
        </InputWrapper>
        {loading ? <ActivityIndicator size="large" color="#e8eaf6" /> : null}
        <Algolia
          title="Search by Algolia"
          onPress={() => Linking.openURL('https://www.algolia.com')}
        >
          <Image source={AlgoliaLogo} />
        </Algolia>
      </Wrapper>
    )
  }
}
