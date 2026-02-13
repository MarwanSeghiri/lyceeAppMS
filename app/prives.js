import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const data = require('../constants/data.json');

export default function PrivesScreen() {
  const filteredData = data.filter(item => 
    item.statut === 'privé' && 
    ['Paris', 'Créteil', 'Versailles'].includes(item.academie)
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lycées privés (Région Parisienne)</Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.code_uai}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.nom_etablissement}</Text>
            <Text style={styles.details}>{item.academie} - {item.libelle}</Text>
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
    fontSize: 16,
    fontWeight: '500',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});
