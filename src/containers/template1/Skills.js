import React from 'react';

import Title from './Title';
import { Text, View, StyleSheet } from '../../../dist/react-pdf.es.js';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
  card: {
    marginBottom: 14,
    paddingLeft: 10
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  leftColumn: {
    flex: 4,
    fontSize: 10,
    fontWeight: 200,
    fontFamily: 'Lato',
    paddingRight: 10
  },
  rightColumn: {
    flex: 1,
    fontSize: 10,
    fontWeight: 200,
    flexDirection: 'row'
  },
  outlet: {
    width: 8,
    height: 8,
    borderRadius: 50,
    border: '1 solid #4E4562',
    marginRight: 2
  },
  fill: {
    width: 8,
    height: 8,
    backgroundColor: '#4E4562',
    borderRadius: 50,
    border: '1 solid #4E4562',
    marginRight: 2
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#377da2',
    marginBottom: 10
  }
});

const SkillEntry = ({ name, skills }) => {
  const renderLevel = level => {
    const oneLevel = [];
    for (let i = 0; i < level; i++) {
      oneLevel.push(<View key={i} style={styles.fill} />)
    }
    return oneLevel
  }

  const renderNoLevel = noLevel => {
    const noLevels = [];
    for (let i = 0; i < noLevel; i++) {
      noLevels.push(<View key={i} style={styles.outlet} />)
    }
    return noLevels
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      {skills.map((skill, i) => (
        <View style={styles.rowContainer} key={i}>
          <Text style={styles.leftColumn}>
            {skill.title}
          </Text>
          <View style={styles.rightColumn} >
            {renderLevel(skill.level)}
            {renderNoLevel(5 - (skill.level))}
          </View>
        </View>
      ))}
    </View>
  )
}

const Skills = props => {
  return (
    <View style={{ width: '100%' }}>
      <Title>Skills</Title>
      {
        props.skills.map((oneSkill, index) => {
          return (
            <SkillEntry
              key={index}
              name={oneSkill.type}
              skills={oneSkill.details}
            />
          )
        })
      }
    </View>
  )
}

export default Skills;
