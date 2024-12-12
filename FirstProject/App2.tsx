import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'

const App2 = () => {
    return (
        <View style={styles.screen}>
            <SafeAreaView>
                <Text style={styles.headingText}>App2</Text>
                <ScrollView>
                    <FlatCards />
                    <ElevatedCards />
                    <FancyCards />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default App2

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#302F2FFF",
        height: '100%'
    },
    headingText: {
        fontSize: 30,
        fontWeight: 700,
        color: '#FFFFFF',
        padding: 8
    }
});