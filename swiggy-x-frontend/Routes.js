import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RestaurantDetail from './pages/RestaurantDetail';
import Home from './pages/Home';
import Order from './pages/Order';
import Account from './pages/Account';
import React from 'react';


const RootNavigation = () => {

    const Stack = createStackNavigator()

    const screenOptions = {
        headerShown: false
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                    <Stack.Screen name='Order' component={Order} />
                    <Stack.Screen name='Account' component={Account} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


export default RootNavigation;