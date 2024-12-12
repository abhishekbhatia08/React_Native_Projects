import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Cards</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image source={{ uri: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhaiUyMG1haGFsfGVufDB8fDB8fHww" }} style={styles.cardImage}></Image>
                <View style={styles.textPadding}>
                    <Text style={styles.cartTitle}>Taj Mahal</Text>
                    <Text style={styles.cartLabel}>Agra, UP, India</Text>
                    <Text style={styles.cartDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal.</Text>
                    <Text style={styles.cardFooter}>10 Minutes away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 8,
    },
    card: {
        backgroundColor: "#E8E0E0FF",
        borderRadius: 12,
        margin: 12
    },
    elevatedCard: {
        elevation: 5
    },
    cardImage: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 200,
    },
    cartTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    cartLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    cartDescription: {
        fontSize: 14,
        fontWeight: '500',
        color: '#616C6F',
        paddingVertical: 8
    },
    cardFooter: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2C3335',
    },
    textPadding: {
        marginHorizontal: 14,
        marginVertical: 18
    }
})