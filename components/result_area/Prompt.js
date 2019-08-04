import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Prompt = ({ result }) => {
    var textColor = '#250902';
    var fontStyle = 'normal'
    switch (result) {
        case 'Victory!':
            textColor = 'green';
            break;
        case 'Defeat!':
            textColor = 'red';
            break;
        case 'Draw!':
            textColor = 'blue';
            break;
        default:
            textColor = '#00a600'
            fontStyle = 'italic';
            break;
    }
    const buttonStyle = { color: textColor, fontStyle: fontStyle };

    return (
        <View style={styles.container}>
            <Text style={[styles.result, buttonStyle]}>{result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    result: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default Prompt;