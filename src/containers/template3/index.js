import React from 'react';

import ReactPDF, {
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
  Text
} from '../../../dist/react-pdf.es.js';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Title from './Title';
import * as resumeData from '../common/input.json';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FBFBFB',
    paddingBottom: 30
  },
  overviewContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  overviewLeft: {
    width: 220,
    position: 'relative',
  },
  overviewLeftText: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#00AFDE',
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 0.8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  },
  leftColumn: {
    flexDirection: 'column',
    backgroundColor: '#EFEEF1',
    paddingLeft: 20,
    paddingRight: 20,
    width: 220,
    // paddingTop: 30,
    paddingRight: 15
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 25,
    // paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
    marginTop: 4,
    marginBottom: 4
  },
  normalText: {
    fontFamily: 'Lato',
    fontSize: 10
  } 
});

Font.register({
  family: 'Open Sans',
  src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
});
Font.register({
  family: 'Lato',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`,
});
Font.register({
  family: 'Lato Italic',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
});
Font.register({
  family: 'Lato Bold',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`,
});

const Resume = props => {
  const { infor, skill, education, experience, overview } = resumeData;
  return (
    <Page {...props} style={styles.page}>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewLeft}>
          <Image
            src={infor.image}
            style={styles.image}
          />
          <View style={styles.overviewLeftText}>
            <Text style={{ textAlign: 'center', fontFamily: 'Lato Bold', fontSize: 12, paddingBottom: 4 }}>{infor.name}</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'Lato Bold', fontSize: 11 }}>{infor.position}</Text>
          </View>
        </View>
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
          <View>
            <Title>Overview</Title>
            <Text style={styles.normalText}>{overview}</Text>
          </View>
          <View style={{paddingTop: 40}}>
            <View style={styles.line} />
            <Text style={styles.normalText}>{infor.phone}</Text>
            <View style={styles.line} />
            <Text style={styles.normalText}>{infor.email}</Text>
            <View style={styles.line} />
            <Text style={styles.normalText}>{infor.address}</Text>
            <View style={styles.line} />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={{ paddingRight: 10 }}>
            <Skills skills={skill} />
            <Education {...education} />
          </View>
        </View>
        <Experience experience={experience} />
      </View>
    </Page>
  )
}
const Output = () => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Resume size="A4" />
    {/* <Resume orientation="landscape" size="A4" />
    <Resume size={[380, 1250]} /> */}
  </Document>
);

ReactPDF.render(<Output />, `${__dirname}/my_cv.pdf`);
