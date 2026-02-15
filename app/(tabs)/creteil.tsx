import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import donneesLycees from '@/data/lycees-donnees-generales-v1.json';

export default function EcranLyceesCreteil() {
  const lyceesCreteil = donneesLycees.filter(lycee => lycee.academie === 'Créteil');

  return (
    <View style={ecranStyles.conteneur}>
      <Text style={ecranStyles.titre}>Lycées de l'académie de Créteil</Text>
      <FlatList
        data={lyceesCreteil}
        keyExtractor={(element) => element.code_uai}
        renderItem={({ item: element }) => (
          <View style={ecranStyles.elementLycee}>
            <Text style={ecranStyles.nomLycee}>{element.nom_etablissement}</Text>
            <Text>{element.adresse_postale}, {element.code_postal} {element.libelle}</Text>
            <Text><Text style={{fontWeight: 'bold'}}>Type :</Text> {element.nature_uai}</Text>
            <Text><Text style={{fontWeight: 'bold'}}>Statut :</Text> {element.statut}</Text>
          </View>
        )}
      />
    </View>
  );
}

const ecranStyles = StyleSheet.create({
  conteneur: {
    flex: 1,
    padding: 20,
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  elementLycee: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  nomLycee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
