import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blogs Card</Text>
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
          <Text numberOfLines={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ex commodi veritatis ipsa minima placeat dicta. Dolores veniam,
            autem, doloribus optio, dolorum aliquid libero at animi id
            necessitatibus molestias nobis?
          </Text>
        </View>
        <View style={styles.footerCard}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.facebook.com/naufaairsad/')
            }>
            <Text style={styles.socialLinks}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/baranaya_/')}>
            <Text style={styles.socialLinks}>Instagram</Text>
          </TouchableOpacity>
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
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#ff7f50',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    padding: 10,
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyCard: {
    padding: 10,
  },
  footerCard: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 18,
    color: '#000',
    backgroundColor: '#e6e6fa',
    borderRadius: 9,
    paddingHorizontal: 25,
    paddingVertical: 6,
  },
});
