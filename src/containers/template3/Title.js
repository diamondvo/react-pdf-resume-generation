import React from 'react';

import { Text, StyleSheet, View } from '../../../dist/react-pdf.es.js';

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    marginBottom: 8
  },
  title: {
    width: '100%',
    fontFamily: 'Lato Bold',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'left'
  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: "#00AFDE",
    borderRadius: 10,
  }
});

const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.line} />
    </View>
  )
}


export default Title;
