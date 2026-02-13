import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const data = require('../constants/data.json');

export default function VersaillesScreen() {
  const emails = data
    .filter(item => item.academie === 'Versailles')
    .map(item => ({
      id: item.code_uai,
      mail: item.mail,
      nom: item.nom_etablissement
    }));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Emails des lycées de Versailles</Text>
      <FlatList
        data={emails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.nom}</Text>
            <Text style={styles.email}>{item.mail || 'Non renseigné'}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 14,
    color: '#333',
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f',
    marginTop: 5,
  },
});
