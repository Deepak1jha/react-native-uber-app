import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/home/HomeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App(){
    return (
        <Provider store={ store }>
                <SafeAreaProvider>
                    <HomeScreen/>
                </SafeAreaProvider>
        </Provider>

    );
}

