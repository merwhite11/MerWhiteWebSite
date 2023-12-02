import React from "react";
import {Page, Text, Image, Document, StyleSheet} from "@react-pdf/renderer";
import SampleImage from "../photos/sample_image.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontsize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  }
});

const PDFFile = () => {
  const pageColors = ['#f6d186', '#f67280', '#c06c84'];
  const pages = [
    {text: 'First page'},
    {text: 'Second page'},
    {text: 'Third page'}
  ]
  return (
  <Document>
        {pages.map((page, index) => {
        return (
          <Page key={index} style={{...styles.body, backgroundColor: pageColors[index]}}>
          <Text style={styles.header} fixed></Text>
          <Image style={styles.image} src={page.image} />
          <Text style={styles.text}>
          {page.text}
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
        )
      })}
  </Document>

  )
};

export default PDFFile;