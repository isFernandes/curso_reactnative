import React, { Component } from 'react';

import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default class Intro extends Component {

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: "100%", backgroundColor: "crimson" }}>
      <ImageBackground style={{width: "100%", height:"100%", justifyContent: "center", alignItems: "center"}} source={require('../assets/fundoSlide1.png')}>
      <Text style={{ color: "white" }}>Página Intro, teste</Text>
      
        <TouchableOpacity style={{ backgroundColor: 'crimson',  padding: 13, borderRadius: 35, marginTop: 20 }} onPress = { () => this.props.navigation.navigate('Main')}>
        <Text style={{ color: 'black'}}>Ir para pagina Main</Text>
      </TouchableOpacity>
      </ImageBackground>

      </View>
    );
  }
}
