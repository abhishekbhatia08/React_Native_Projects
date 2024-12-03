import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <Text style={isDarkMode ? Styles.whiteText : Styles.blackText}>
          Hello world!
        </Text>
      </SafeAreaView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    fontSize: 24,
    fontWeight: '600',
    color: "#FFFFFF"
  },
  blackText: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000000"
  },
});

export default App;
