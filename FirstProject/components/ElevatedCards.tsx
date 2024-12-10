import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <ScrollView horizontal={true}
                scrollEnabled={true}
                style={styles.scrollContainer}
                contentContainerStyle={{ alignItems: 'center' }}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 6
    },
    card: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardElevated: {
        backgroundColor: "#BEAAA0FF",
        elevation: 20,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowColor: '#333',
        shadowRadius: 20,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 8,
    }
})