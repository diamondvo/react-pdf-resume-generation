import React from 'react';

import { Text, StyleSheet, Image, View } from '../../../dist/react-pdf.es.js';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center'
  },
  iconContainer: {
    width: 25,
    paddingRight: 10
  },
  text: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  imageCustom: {
    flex: 1,
    color: 'black'
  }
});

const Profile = props => {
  const { email, address, phone } = props.infor;
  return (
    <View>
      <View style={styles.profileContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.imageCustom} src="https://cdn1.iconfinder.com/data/icons/ui-glynh-01-of-5/100/UI_Glyph_02_-18-512.png" />
        </View>
        <View>
          <Text style={styles.text}>{phone}</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.imageCustom} src="https://pluspng.com/img-png/email-icon-png-mail-black-envelope-symbol-free-icon-512.png" />
        </View>
        <View>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.imageCustom} src="https://cdn4.iconfinder.com/data/icons/online-marketing-double-color-black-and-red-vol-3/52/location__pin__pinned__map__pointer__mark__gps-512.png" />
        </View>
        <View>
          <Text style={styles.text}>{address}</Text>
        </View>
      </View>
    </View>
  )
};

export default Profile;
