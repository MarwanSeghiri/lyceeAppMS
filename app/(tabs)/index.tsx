import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function EcranAccueil() {
  return (
    <View style={ecranStyles.conteneur}>
      <Text style={ecranStyles.titre}>Bienvenue sur LyceeApp</Text>
      <View style={ecranStyles.separateur} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={ecranStyles.sousTitre}>Votre guide des lycées en France !</Text>
    </View>
  );
}

const ecranStyles = StyleSheet.create({
  conteneur: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sousTitre: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
  separateur: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

