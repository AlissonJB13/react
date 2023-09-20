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
// Importe a função que obtém os dados da coleção

const MyPDF = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const collectionData = await getCollectionData();
      setData(collectionData);
    }
    fetchData();
  }, []);

  return (
    <PDFViewer width="1000" height="600">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Dados BioIF</Text>
            {data.map((item, index) => (
              <View key={index} style={[styles.dataRow, { marginBottom: 10 }]}>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Nome: {item.nome}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Nome do Usuário: {item["nome usuario"]}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Tipo: {item.tipo}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Descrição: {item.descricao}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Link da foto: {item.foto}
                </Text>
                {/*<Image src={item.foto} />*/}
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Localização: {item.localizacao}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Data: {item["data e hora"]}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Verificado: {item.verificado ? "Sim" : "Não"}
                </Text>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Like: {item.like} | Dislike: {item.dislike}
                </Text>
                {/*<Text style={styles.label}>Dislike: {item.dislike}</Text>*/}
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    textAlign: "justify",
    flex: 1,
    fontSize: 12,
    //marginRight: 5,
    marginBottom: 5,
  },
  image: {
    width: 400, // Largura da imagem
    height: 400, // Altura da imagem
  },
});

export default MyPDF;
