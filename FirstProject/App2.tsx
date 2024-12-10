import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App2 = () => {
    return (
        <View>
            <SafeAreaView>
                <Text>App2</Text>
                <ScrollView>
                    <FlatCards />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default App2