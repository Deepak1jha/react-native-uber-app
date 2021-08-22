import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import MapScreen from "./screens/map/MapScreen";

export default function App(){

    const Stack = createNativeStackNavigator();

    return (
        <Provider store={ store }>
            <NavigationContainer>
                <KeyboardAvoidingView
                    style={ { flex : 1 } }
                    behavior={"height"}
                >
                <Stack.Navigator>
                        <Stack.Screen name="HomeScreen" component={ HomeScreen } options={ { headerShown : false } }/>
                        <Stack.Screen name="MapScreen" component={ MapScreen } options={ { headerShown : false } }/>
                    </Stack.Navigator>
                </KeyboardAvoidingView>
            </NavigationContainer>
        </Provider>

    );
}

