import React from 'react';

import { Text, View, StyleSheet } from '../../../dist/react-pdf.es.js';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
    lineHeight: 1
  }
});

export default ({ school, location, degree, rangeTime }) => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>{school} | {location}</Text>
    <Text style={styles.degree}>{degree}</Text>
    <Text style={styles.degree}>{rangeTime}</Text>
  </View>
);
