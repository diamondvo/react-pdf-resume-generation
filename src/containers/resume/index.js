import React from 'react';

import ReactPDF, {
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '../../../dist/react-pdf.es.js';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Profile from './Profile';
import * as resumeData from './input.json';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FBFBFB'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    backgroundColor: '#D3D8CD',
    paddingLeft: 20,
    paddingRight: 20,
    width: 220,
    paddingTop: 30,
    paddingRight: 15
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
  rightColumn: {

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
  const { infor, skill, education, experience } = resumeData;
  return (
    <Page {...props} style={styles.page}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={{ paddingRight: 10 }}>
            <Image
              src={infor.image}
              style={styles.image}
            />
            <Profile infor={infor} />
            <Skills skills={skill}/>
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
