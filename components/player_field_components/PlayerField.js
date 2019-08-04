import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PlayerCard from './PlayerCard';

const PlayerField = ({ playerChoice, compChoice }) => {
    return (
        <View style={styles.choiceWrapper}>
            <PlayerCard playerName='Player' choice={playerChoice} />
            <Image style={styles.image} 
                    source={require('../../assets/versus-icon-vector.png')}
                    resizeMode='contain' />
            <PlayerCard playerName='Computer' choice={compChoice} />
        </View>
    )
};

const styles = StyleSheet.create({
    choiceWrapper: {
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 2,
        paddingTop: 80,
        shadowRadius: 5,
        paddingBottom: 100,
        borderColor: 'grey',
        borderRadius: 10,
        shadowOpacity: 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            height: 5,
            width: 5
        },
        elevation: 3,
    },
    image: {
        width: 40,
        height: 40,
        alignSelf: 'flex-start',
    },
});

export default PlayerField;