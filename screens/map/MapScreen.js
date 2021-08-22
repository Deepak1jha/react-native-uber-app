import React from 'react';
import { View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Maps from "../../components/map/Maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../../components/cards/NavigateCard";
import RideOptionsCard from "../../components/cards/RideOptionsCard";

const MapScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <View style={ tw`h-1/2` }>
                <Maps/>
            </View>
            <View style={ tw`h-1/2` }>
                <Stack.Navigator>
                    <Stack.Screen
                        name={ "NavigateCard" }
                        component={ NavigateCard }
                        options={ { headerShown : false } }
                    />
                    <Stack.Screen
                        name={ "RideOptionsCard" }
                        component={ RideOptionsCard }
                        options={ { headerShown : false } }
                    />
                </Stack.Navigator>
            </View>
        </>
    );
};

export default MapScreen;
