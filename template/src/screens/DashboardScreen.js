import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import { colors } from '../constants'

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <AppText fontStyle="Bold">DashboardScreen</AppText>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  }
})
