import React, { useEffect, useState } from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import getCollectionData from "./PDFBioIF";
//import { Link } from "react-router-dom";

// Importe a função que obtém os dados da coleção

const MyPDF = () => {
  const styles = StyleSheet.create({
    /*page: {
      flexDirection: "row",
      backgroundColor: "white",
    },*/
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: "center",
      fontWeight: "bold",
    },
    Text: {
      textAlign: "justify",
      flex: 1,
      fontSize: 12,
      //marginRight: 5,
      marginBottom: 5,
    },
    image: {
      // Altura da imagem
      objectFit: "contain",
      //paddingLeft: 50,
      //paddingRight: 50,
    },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const collectionData = await getCollectionData();
      setData(collectionData);
    }
    fetchData();
  }, []);

  return (
    <PDFViewer width="842" height="595">
      <Document>
        {data.map((item, index) => (
          <Page key={index} size="A4" orientation="portrait">
            <View style={styles.section}>
              {/*<Text style={styles.title}>Dados BioIF</Text>*/}

              <View style={[styles.dataRow, { marginBottom: 10 }]}>
                <Text style={styles.label}>Nome: {item.nome}</Text>
                <Text style={styles.label}>Tipo: {item.tipo}</Text>
                <Text style={[styles.label, { marginBottom: 10 }]}>
                  Descrição: {item.descricao}
                </Text>
                <div style={{ alignItems: "center" }}>
                  <Image style={styles.image} source={{ uri: item.foto }} />
                </div>

                <Text style={styles.label}>
                  Localização: {item.localizacao}
                </Text>
                <Text style={styles.label}>Data: {item["data e hora"]}</Text>
                <Text style={styles.label}>
                  Verificado: {item.verificado ? "Sim" : "Não"}
                </Text>
                <Text style={styles.label}>
                  Like: {item.like} | Dislike: {item.dislike}
                </Text>
              </View>
            </View>
          </Page>
        ))}
      </Document>
    </PDFViewer>
  );
};

export default MyPDF;
