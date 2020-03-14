import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '../../../dist/react-pdf.es.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  type: {
    fontSize: 10,
    fontFamily: 'Lato Bold',
  },
  normal: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline'
  },
});


const Detail = ({ type, des, dataType }) => {
  return (
    <View style={{ paddingLeft: 10 }}>
      <Text style={styles.type}>{`${type}: `}</Text>
      <List>
        {
          des.map((item, index) => <Item key={index}>
            {(dataType === 'text' || dataType === 'singleText') && item}
            {dataType === 'link' && <Text style={styles.link}>{item}</Text>}
          </Item>)
        }
      </List>
    </View>
  )
}

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${position} | ${company}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {details.map((oneDetail, index) => {
        return (
          <Detail
            key={index}
            type={oneDetail.type}
            des={oneDetail.des}
            dataType={oneDetail.dataType}
          />
        )
      })}
    </View>
  );
};

const Experience = props => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {props.experience.map(({ company, date, details, position }, index) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={`${company}-${position}-${index}`}
        position={position}
      />
    ))}
  </View>
);

export default Experience;
