import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  // const num: Number = 10;
  // console.log(num + 90);
  const contacts = [
    {
      uid: 1,
      name: 'Alip Wawan',
      address: 'bandung',
      imageUrl:
        'https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.6435-9/124249571_118406376738038_2543794181175646157_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfL1eKw8UOt5uk7-ufXXDCv8Qrwzti52m_xCvDO2LnabJobxfhoqu3geFBgd0czePx6hn7YufvMgHixPTiU7Es&_nc_ohc=J01hUhkue-gAX9U16kX&_nc_ht=scontent.fcgk18-2.fna&oh=00_AfDSTbalfRFJnh5nYIrK1QUmj_CwpXfj8a4uadrEfRA8dw&oe=64B5792B',
      linkUrl: 'https://www.instagram.com/liefantonym',
    },
    {
      uid: 2,
      name: 'Naufa Irsjad Najmudin',
      address: 'Bekasi',
      imageUrl:
        'https://scontent.fcgk18-1.fna.fbcdn.net/v/t1.18169-9/19301_933407166693963_8614212424570437149_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHCsgMORtJEQ9NdP6gYOt-_Xi8VZMmS7YBeLxVkyZLtgC0ARd2g10_UUUOqVictwDDXrUCBqEtz0YTdNBTUTEr2&_nc_ohc=1dmFQ_nwluEAX8P7Par&_nc_oc=AQlAahEoXVVF3F0U60L_biVBSL1P_X-p0r8e4vuMvzvTRhBx7FjsbbVe4lQglGA_8nj21r_PLrUhRYQQ5J_tepSr&_nc_ht=scontent.fcgk18-1.fna&oh=00_AfB4jdGtXBWkGUtn5MDsX7EN7zTJtnReanC1zRcz1vb6QA&oe=64B5737B',
      linkUrl: '',
    },
    {
      uid: 3,
      name: 'Acil',
      address: 'Bekasi',
      imageUrl:
        'https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.18169-9/15727381_1461466457198037_1918016232795053727_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGIuRmxrEJlLnIZ-4Ib_aZR9fJrOMf694318ms4x_r3jRFiRqvEmfqdHuWIYJBKBhfYJ2sIQ7vvtkH0hJBFLg_h&_nc_ohc=W_wGZBz0QBAAX9jWB15&_nc_ht=scontent.fcgk18-2.fna&oh=00_AfDUp9SigMo01KdTPvGzQo8O-GwHcfqohckSrIYyk1C_JQ&oe=64B57AE5',
      linkUrl: '',
    },
    {
      uid: 4,
      name: 'Galang',
      address: 'Jakarta Utara',
      imageUrl:
        'https://i.pinimg.com/236x/27/87/62/2787629fe39ee0bb053b9d1cf1906d33.jpg',
      linkUrl: '',
    },
    {
      uid: 5,
      name: 'iciy',
      address: 'Solo',
      imageUrl:
        'https://i.pinimg.com/236x/95/26/12/95261256b08293c3b2d897a1f5cd9d13.jpg',
      linkUrl: '',
    },
    {
      uid: 6,
      name: 'Bokis',
      address: 'Cianjur',
      imageUrl:
        'https://i.pinimg.com/236x/de/6e/ab/de6eab3d5d68cb12b696867f5ac321c4.jpg',
      linkUrl: '',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, address, imageUrl, linkUrl}) => (
          <TouchableOpacity
            key={uid}
            style={styles.userCard}
            onPress={() => {
              if (linkUrl === '') {
                return;
              } else {
                Linking.openURL(linkUrl);
              }
            }}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.statusAddress}>{address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 3,
    marginBottom: 4,
    marginRight: 10,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fdd835',
    padding: 4,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 5,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusAddress: {
    fontSize: 16,
    marginTop: 5,
  },
});
