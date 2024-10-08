import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { pokemonsApi } from './src/services/api';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ApiProvider api={pokemonsApi}>
        <StatusBar
          barStyle={'dark-content'}
        />
        <RootNavigator />
      </ApiProvider>
    </SafeAreaView>
  );
}

export default App;
