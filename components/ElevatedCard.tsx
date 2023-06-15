import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap1</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap2</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap3</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap4</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap5</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap6</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap7</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#ffd700',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#696969',
    shadowOpacity: 0.4,
    textShadowRadius: 2,
  },
});
