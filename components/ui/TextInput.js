import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../constans/color'

function FormInput({ name, ...otherProps }) {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{name}</Text>
      <TextInput style={styles.input} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 12,
  },
  input: {
    borderColor: Colors.softBlack,
    borderBottomWidth: 1,
    padding: 4,
    fontSize: 16,
  },
  label: {
    color: Colors.softBlack,
    marginBottom: 2,
  },
})
export default FormInput
