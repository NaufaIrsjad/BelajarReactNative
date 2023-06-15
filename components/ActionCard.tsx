import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Apa nih yang terbaru dihidup kamu ??
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/flat-people-group-asking-questions_23-2148927481.jpg?size=626&ext=jpg&ga=GA1.2.1746584620.1686765079&semt=sph',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyCard}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ex commodi veritatis ipsa minima placeat dicta. Dolores veniam,
            autem, doloribus optio, dolorum aliquid libero at animi id
            necessitatibus molestias nobis?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#1e90ff',
    marginLeft: 8,
    borderRadius: 10,

  },
  elevatedCard: {},
  headingContainer: {},
  headerText: {
    padding: 12,
    fontSize: 18,
  },
  cardImage: {
    height: 100,
  },
  bodyCard: {
    marginVertical: 20,
    marginHorizontal: 18,
    fontSize: 13,
  },
});
