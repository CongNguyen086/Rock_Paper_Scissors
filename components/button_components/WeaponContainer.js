import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonWeapon from './ButtonWeapon';

const weapons = [
    {
        name: 'rock',
        uri: 'https://i.imgur.com/JcVaJO5.png',
    },
    {
        name: 'paper',
        uri: 'https://i.imgur.com/2zYQCeR.png',
    },
    {
        name: 'scissors',
        uri: 'https://i.imgur.com/6PnpW75.png',
    }
];

const WeaponContainer = ({ onPress }) => {
    return (
        <View style={styles.buttonContainer}>
            {
                weapons.map(choice => {
                    return <ButtonWeapon key={choice.name} name={choice.name} onPress={onPress} />;
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WeaponContainer;

