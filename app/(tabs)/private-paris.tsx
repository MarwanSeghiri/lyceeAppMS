import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import donneesLycees from '@/data/lycees-donnees-generales-v1.json';

export default function EcranLyceesPrivesParis() {
  const academiesRegionParisienne = ['Paris', 'Versailles', 'Créteil'];
  const lyceesPrivesParis = donneesLycees.filter(
    (lycee) =>
      lycee.statut === 'privé' && academiesRegionParisienne.includes(lycee.academie)
  );

  return (
    <View style={ecranStyles.conteneur}>
      <Text style={ecranStyles.titre}>Lycées Privés de la Région Parisienne</Text>
      <FlatList
        data={lyceesPrivesParis}
        keyExtractor={(element) => element.code_uai}
        renderItem={({ item: element }) => (
          <View style={ecranStyles.elementLycee}>
            <Text style={ecranStyles.nomLycee}>{element.nom_etablissement}</Text>
            <Text>{element.adresse_postale}, {element.code_postal} {element.libelle}</Text>
            <Text><Text style={{fontWeight: 'bold'}}>Académie :</Text> {element.academie}</Text>
            <Text><Text style={{fontWeight: 'bold'}}>Type :</Text> {element.nature_uai}</Text>
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
