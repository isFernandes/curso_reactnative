import React, { Component } from 'react';

import { View, Text, ImageBackground } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: "100%", backgroundColor: "black" }}>

<ImageBackground style={{width: "100%", height:"100%", justifyContent: "center", alignItems: "center"}} source={require('../assets/screenHome.png')}>
        <Text style={{ color: "white" }}>Página Main</Text>
</ImageBackground>   
   </View>
    );
  }
}
