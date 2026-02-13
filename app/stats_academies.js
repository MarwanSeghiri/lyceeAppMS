import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const data = require('../constants/data.json');

export default function StatsAcademiesScreen() {
  const academies = ['Paris', 'Créteil', 'Versailles'];
  
  const stats = academies.map(acad => ({
    name: acad,
    count: data.filter(item => item.academie === acad).length
  }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Lycées par Académie (IDF)</Text>
        
        {stats.map((stat, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.acadName}>Académie de {stat.name}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{stat.count}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
  },
  acadName: {
    fontSize: 18,
    fontWeight: '500',
  },
  badge: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
