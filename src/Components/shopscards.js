import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';



const ShopsCards = (props) => {
    const { img, text } = props;
    return (
        <View>
            <ImageBackground source={{ uri: img }} style={styles.card} >
                <Text style={styles.card_text}> {text} </Text>
            </ImageBackground>
        </View>

    );
}


const styles = StyleSheet.create({
    card: {
        width: 140, height: 120,
        margin: 15,
        justifyContent: 'flex-end',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 6, overflow: 'hidden'

    },
    card_text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    title: {
        fontSize: 14,
        textTransform: 'uppercase',
        marginLeft: 10, marginTop: 5,
        color: '#5e35b1',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontFamily: 'space-mono'
    }
});


export default ShopsCards;