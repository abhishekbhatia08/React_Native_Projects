import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ContactList from './components/ContactList'

const App2 = () => {
    return (
        <View style={styles.screen}>
            <SafeAreaView>
                <ScrollView scrollEnabled={true}>
                    <FlatCards />
                    <ElevatedCards />
                    <FancyCards />
                    <ContactList />
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