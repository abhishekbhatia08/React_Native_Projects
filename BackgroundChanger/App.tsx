import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBg, setRandomBg] = useState('#fffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    setRandomBg(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBg}/>
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <TouchableOpacity style={styles.actionButton} onPress={() => generateColor()}>
          <Text style={styles.actionButtonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures content centers vertically and horizontally
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButton: {
    backgroundColor: '#275AA7FF',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Adds shadow on Android
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
