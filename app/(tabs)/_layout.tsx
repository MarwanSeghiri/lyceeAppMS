import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function IconeBarreOnglets(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  couleur: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function MiseEnPageOnglets() {
  const schemaDeCouleurs = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[schemaDeCouleurs ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ couleur }) => <IconeBarreOnglets name="home" color={couleur} />,
        }}
      />
      <Tabs.Screen
        name="creteil"
        options={{
          title: 'Lycées Créteil',
          tabBarIcon: ({ couleur }) => <IconeBarreOnglets name="building-o" color={couleur} />,
        }}
      />
      <Tabs.Screen
        name="private-paris"
        options={{
          title: 'Lycées Privés',
          tabBarIcon: ({ couleur }) => <IconeBarreOnglets name="lock" color={couleur} />,
        }}
      />
      <Tabs.Screen
        name="lycee-types-count"
        options={{
          title: 'Stats Lycées',
          tabBarIcon: ({ couleur }) => <IconeBarreOnglets name="pie-chart" color={couleur} />,
        }}
      />
      <Tabs.Screen
        name="versailles-emails"
        options={{
          title: 'Emails Versailles',
          tabBarIcon: ({ couleur }) => <IconeBarreOnglets name="at" color={couleur} />,
        }}
      />
      <Tabs.Screen
        name="paris-region-academy-count"
        options={{
          title: 'Stats Académies',
          tabBarIcon: ({ couleur }) => <IconeBarreOnglets name="area-chart" color={couleur} />,
        }}
      />
    </Tabs>
  );
}
