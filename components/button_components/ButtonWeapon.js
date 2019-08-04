import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ButtonWeapon = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(name)}>
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonText}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bca000',
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ButtonWeapon;