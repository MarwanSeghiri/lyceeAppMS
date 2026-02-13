import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Gestion des Lycées</Text>
        
        <Link href="/creteil" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lycées de Créteil</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/prives" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lycées Privés (Paris)</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/types" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Stats par Type</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/versailles" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Emails Versailles</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/stats_academies" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Stats par Académie</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
