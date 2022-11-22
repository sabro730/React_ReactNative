import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Nails from './src/Pages/Nails'
import Waxing from './src/Pages/Waxing'
import Relaxing from './src/Pages/Relaxing'
import Contact from './src/Pages/Contact'
import PageNotFound from './src/Pages/PageNotFound'
import './src/App.css'
import './src/assets/js/fontawesome'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato', display: 'none' },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nails" component={Nails} />
        <Stack.Screen name="Waxing" component={Waxing} />
        <Stack.Screen name="Relaxing" component={Relaxing} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="PageNotFound" component={PageNotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;