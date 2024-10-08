import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import SinglePokemon from '../screens/SinglePokemon';

const Stack = createStackNavigator();

interface RootNavigatorProps {

}

const RootNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1}} edges={[]}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Главная' }}
          />
          <Stack.Screen
            name="SinglePokemon"
            component={SinglePokemon}
            options={{ title: 'Покемон' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default React.memo(RootNavigator);
