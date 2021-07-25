import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import { colors } from '../constants'

const PlanScreen = () => {
  return (
    <View style={styles.container}>
      <AppText fontStyle="Bold">PlanScreen</AppText>
    </View>
  )
}

export default PlanScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  }
})
