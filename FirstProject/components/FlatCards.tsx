import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.card1]}>
                    <Text>RED</Text>
                </View>
                <View style={[styles.card, styles.card2]}>
                    <Text>GREEN</Text>
                </View>
                <View style={[styles.card, styles.card3]}>
                    <Text>BLUE</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
    card: {
        width: 200,
        height: 100,
        margin: 10,
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card1: {
        backgroundColor: '#EF5354'
    },
    card2: {
        backgroundColor: '#156F56FF'
    },
    card3: {
        backgroundColor: '#5DA3FA'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 700,
        color: '#FFFFFF',
        padding: 8
    }
})