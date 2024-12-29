import { Image, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react'
import React from 'react'

type CurrencyProps = PropsWithChildren<{
    flag: string,
    name: string
}>

const CurrencyButton = (props: CurrencyProps): JSX.Element => {
    return (
        <View style={styles.button}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.buttonText}>{props.name}</Text>
        </View>
    );
}

export default CurrencyButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 12,
        padding: 10,
        width: 120,
        borderWidth: 4,
        backgroundColor: '#333',
        borderColor: '#333',
        alignContent: 'center',
        justifyContent: 'center',
        elevation: 2,
        height: 120
    },
    flag: {
        fontSize: 30,
        margin: 12
    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
    }
})