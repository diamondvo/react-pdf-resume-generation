import React from 'react';

import { Text, StyleSheet } from '../../../dist/react-pdf.es.js';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 12,
    marginBottom: 10,
    textTransform: 'uppercase',
    backgroundColor: '#D3D8CD',
    width: '100%'
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
