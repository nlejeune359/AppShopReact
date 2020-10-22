import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Products from './screens/Products';
import ProductsList from './screens/ProductsList';
import Cart from './screens/Cart';
import Button from './components/Button';
import ShipsList from './screens/ShipsList';
import ShipDetails from './screens/ShipDetails';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ShipsList" component={ShipsList} />
        <Stack.Screen name="ShipDetails" component={ShipDetails} />
                
      </Stack.Navigator>
    </NavigationContainer>
  );
}
