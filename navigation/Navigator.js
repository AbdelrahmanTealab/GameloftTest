import Playlists from '../screens/playlists/Playlists';
import Details from '../screens/details/Details';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Playlists" 
        component={Playlists} 
        options={{
          title: 'Playlists',
          headerStyle: {
            backgroundColor: '#131313',
          },
          headerTintColor: '#f0f0f0',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen 
        name="Details" 
        component={Details}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#131313',
          },
          headerTintColor: '#f0f0f0',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;