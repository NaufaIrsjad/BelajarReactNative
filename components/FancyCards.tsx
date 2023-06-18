import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <TouchableOpacity style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/big-city_1127-3102.jpg?size=626&ext=jpg&ga=GA1.2.1746584620.1686765079&semt=sph',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tambun Selatan</Text>
          <Text style={styles.cardLabel}>Sunagakure, Bekasi</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea
            vero culpa dolorem dicta? Inventore, animi. Rerum magni
            exercitationem odit voluptatem nobis, enim veniam quaerat quis
            dolorum ut, optio veritatis?
          </Text>
          <Text style={styles.cardFooter}>5 Mins Away</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.test}>
        {/* <Button title="asu" onPress={() => console.log('klik')}></Button> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    marginHorizontal: 50,
    fontWeight: 'bold',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 360,
    width: 360,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#66bb6a',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#263238',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#212121',
    textAlign: 'right',
  },
});
