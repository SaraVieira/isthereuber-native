import React from 'react'
import {
  Image,
  Linking,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../Components/Logo'
import AlgoliaLogo from '../../assets/algolia.png'
import { Wrapper, Label, Input, InputWrapper, Algolia } from './Home.elements'
import { fixNameB } from '../utils/fixName'
import { search } from '../utils/algolia'

export default class Home extends React.Component {
  state = { text: '', loading: false, cities: [] }

  static navigationOptions = {
    header: null
  }

  search = () => {
    this.setState({
      loading: true,
      isSearching: false
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
    if (cities.length <= 1) {
      this.props.navigation.push('City', {
        city: cities[0]
      })
    } else {
      this.props.navigation.push('Search', {
        cities: cities
      })
    }
  }

  render() {
    const { loading, isSearching } = this.state
    return (
      <KeyboardAvoidingView
        behavior="height"
        style={{ display: 'flex', flex: 1, height: '100%' }}
      >
        <Wrapper>
          <Logo isSearching={isSearching} />
          <Label>Is there Uber in</Label>
          {loading ? (
            <ActivityIndicator
              style={{ marginTop: 20 }}
              size="large"
              color="#e8eaf6"
            />
          ) : (
            <InputWrapper>
              <Input
                onSubmitEditing={this.search}
                onChangeText={text =>
                  this.setState({ text, isSearching: true })
                }
              />
              <Label style={{ marginLeft: 10 }}>?</Label>
            </InputWrapper>
          )}
          <Algolia
            title="Search by Algolia"
            onPress={() => Linking.openURL('https://www.algolia.com')}
          >
            <Image source={AlgoliaLogo} />
          </Algolia>
        </Wrapper>
      </KeyboardAvoidingView>
    )
  }
}
