import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import { colors } from '../constants'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AppText fontStyle="Bold">SettingsScreen</AppText>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  }
})
