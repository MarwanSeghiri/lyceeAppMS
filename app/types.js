import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const data = require('../constants/data.json');

export default function TypesScreen() {
  // On compte les lycées par catégorie en cherchant si le sigle contient les mots clés
  const counts = {
    'LP': data.filter(item => item.sigle_uai && item.sigle_uai.includes('LP')).length,
    'LPO': data.filter(item => item.sigle_uai && item.sigle_uai.includes('LPO')).length,
    'LGT': data.filter(item => item.sigle_uai && item.sigle_uai.includes('LGT')).length,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Nombre de lycées par type</Text>
        
        <View style={styles.card}>
          <Text style={styles.typeLabel}>Lycées Professionnels (LP)</Text>
          <Text style={styles.countText}>{counts['LP']}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.typeLabel}>Lycées Polyvalents (LPO)</Text>
          <Text style={styles.countText}>{counts['LPO']}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.typeLabel}>Lycées Généraux et Tech (LGT)</Text>
          <Text style={styles.countText}>{counts['LGT']}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  typeLabel: {
    fontSize: 16,
    color: '#444',
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
