import React, { Component } from 'react';
import { View, Text } from 'react-native'

class DetailPengaduan extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    let { data } = this.props.navigation.state.params

    return (
      <View>
        <Text>detail pengaduan</Text>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  }
}

export default DetailPengaduan;