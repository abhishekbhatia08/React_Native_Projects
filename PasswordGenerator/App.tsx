import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
})

export default function App() {

  const [password, setPassword] = useState('');
  const [isGenerated, isPasswordGenerate] = useState(false)
  const [lowerCase, useLowerCase] = useState(false)
  const [upperCase, useUpperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, useSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number): string => {
    let charactersList = ''

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+~`|}{[]:'

    if (upperCase) {
      charactersList += upperCase
    }
    if (lowerCase) {
      charactersList += lowerCase
    }
    if (numbers) {
      charactersList += numbers
    }
    if (symbols) {
      charactersList += symbols
    }

    const passwordResult = createPassword(charactersList, passwordLength);
    return passwordResult;

    setPassword(passwordResult);
    isPasswordGenerate(true);
  }

  const createPassword = (charactersString: string, passwordLength: number) => {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
      let charIndex = Math.floor(Math.random() * charactersString.length);
      password += charactersString.charAt(charIndex);
    }
    return password
  }

  const resetPasswordState = () => {
    setPassword('');
    isPasswordGenerate(false);
    useLowerCase(false);
    useUpperCase(false);
    useNumbers(false);
    useSymbols(false);
  }
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})