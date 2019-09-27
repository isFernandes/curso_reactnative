import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

//IMPORT SWIPER
import Swiper from 'react-native-swiper';


const Slider = props => (
    <View
        style={styles.container}
    >
        <Image
            style={styles.image}
            source={props.uri}

        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

export default class Slide extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageSlider: [
                require('../assets/fundoSlide1.png'),
                require('../assets/fundoSlide2.png'),
                require('../assets/fundoSlide3.png'),
                require('../assets/fundoSlide4.png')
            ]
        }
    }

    render() {
        return (
            <View>
                <Swiper
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                >
                    {
                        this.state.imageSlider.map((item, i) => <Slider
                            uri={item}
                            key={i}
                        />)
                    }
                    <TouchableOpacity style={{ backgroundColor: 'crimson', padding: 13, borderRadius: 35, marginTop: 20 }} onPress={() => this.props.navigation.replace('Main')}>
                        <Text style={{ color: 'black' }}>Ir para pagina Main</Text>
                    </TouchableOpacity>
                </Swiper>
            </View>
        )
    }
}