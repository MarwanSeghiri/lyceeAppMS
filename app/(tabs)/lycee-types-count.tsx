import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import donneesLycees from '@/data/lycees-donnees-generales-v1.json';

export default function EcranStatsLycees() {
  const comptageTypes: { [key: string]: number } = {};

  donneesLycees.forEach(lycee => {
    const typeLycee = lycee.sigle_uai;
    if (comptageTypes[typeLycee]) {
      comptageTypes[typeLycee]++;
    } else {
      comptageTypes[typeLycee] = 1;
    }
  });

  const comptageTypesFiltres: { [key: string]: number } = {};
  const typesPertinents = ['LP PR', 'LPO', 'LGT'];

  typesPertinents.forEach(typeLycee => {
    if (comptageTypes[typeLycee]) {
      comptageTypesFiltres[typeLycee] = comptageTypes[typeLycee];
    } else {
      comptageTypesFiltres[typeLycee] = 0;
    }
  });


  return (
    <View style={ecranStyles.conteneur}>
      <Text style={ecranStyles.titre}>Nombre de Lycées par Type</Text>
      {Object.entries(comptageTypesFiltres).map(([typeLycee, nombre]) => (
        <View key={typeLycee} style={ecranStyles.elementType}>
          <Text style={ecranStyles.nomType}>{typeLycee}:</Text>
          <Text style={ecranStyles.comptageType}>{nombre}</Text>
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
  },
  elementType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  nomType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  comptageType: {
    fontSize: 18,
  },
});
