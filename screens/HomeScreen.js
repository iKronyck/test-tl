import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Here add your Code for Task List and button to navigate to add new tasks, also remember todo's should be able to be deleted. */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
