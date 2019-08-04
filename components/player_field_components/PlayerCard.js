import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlayerCard = ({ playerName, choice: { name, uri } }) => {
    const title = name && name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <View style={styles.choiceContainer} >
            <Text style={styles.playerName}>{playerName}</Text>
            <Image style={styles.choiceImage} source={{uri}} resizeMode='contain' />
            <Text style={styles.choiceCardTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
    },
    playerName: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        // textDecorationLine: 'underline'
    },
    choiceCardTitle: {
        fontSize: 30,
        color: '#250902'
    },
    choiceImage: {
        width: 150,
        height: 150,
        padding: 10,
    }
});

export default PlayerCard;