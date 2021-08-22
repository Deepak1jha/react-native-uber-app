import React from 'react';
import { Image, View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../../components/navOptions/NavOptions";
import Constants from "expo-constants";

const HomeScreen = () => {
    return (
        <View style={ { marginTop : Constants.statusBarHeight, paddingLeft : 15 } }>
            <View style={ tw`p-5` }>
                <Image style={ { height : 100, width : 100, resizeMode : "contain" } }
                       source={ { uri : "https://links.papareact.com/gzs" } }/>
            </View>
            <NavOptions/>
        </View>
    );
};

export default HomeScreen;
