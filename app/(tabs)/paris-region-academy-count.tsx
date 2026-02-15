import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import donneesLycees from '@/data/lycees-donnees-generales-v1.json';

export default function EcranStatsAcademiesParis() {
  const academiesRegionParisienne = ['Paris', 'Versailles', 'Créteil'];
  const comptageAcademies: { [key: string]: number } = {};

  academiesRegionParisienne.forEach(academie => {
    comptageAcademies[academie] = 0;
  });

  donneesLycees.forEach(lycee => {
    if (academiesRegionParisienne.includes(lycee.academie)) {
      comptageAcademies[lycee.academie]++;
    }
  });

  return (
    <View style={ecranStyles.conteneur}>
      <Text style={ecranStyles.titre}>Nombre de Lycées par Académie (Région Parisienne)</Text>
      {Object.entries(comptageAcademies).map(([academie, nombre]) => (
        <View key={academie} style={ecranStyles.elementAcademie}>
          <Text style={ecranStyles.nomAcademie}>{academie}:</Text>
          <Text style={ecranStyles.comptageAcademie}>{nombre}</Text>
        </View>
      ))}
    </View>
  );
}

const ecranStyles = StyleSheet.create({
  conteneur: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  elementAcademie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  nomAcademie: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  comptageAcademie: {
    fontSize: 18,
  },
});
