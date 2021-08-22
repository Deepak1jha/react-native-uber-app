import React from 'react';
import { Image, View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../../components/navOptions/NavOptions";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env"

const HomeScreen = () => {

    console.log(GOOGLE_MAPS_API_KEY)
    console.log(GOOGLE_MAPS_API_KEY)
    console.log(GOOGLE_MAPS_API_KEY)
    return (
        <View style={ { marginTop : Constants.statusBarHeight, paddingLeft : 15 } }>
            <View style={ tw`p-5` }>
                <Image style={ { height : 100, width : 100, resizeMode : "contain" } }
                       source={ { uri : "https://links.papareact.com/gzs" } }/>
            </View>
            <GooglePlacesAutocomplete
                styles={ {
                    container : {
                        flex : 0
                    },
                    textInput : {
                        fontSize : 18
                    }
                } }
                minLength={ 2 }
                enablePoweredByContainer={ false }
                onPress={(data,detail=null)=>{
                    console.log(data)
                    console.log(detail)
                }}
                returnKeyType={"search"}
                placeholder={ "Where from" }
                debounce={ 400 }
                nearbyPlacesAPI={ "GooglePlacesSearch" }
                query={ {
                    key : GOOGLE_MAPS_API_KEY,
                    language : "en"
                } }/>
            <NavOptions/>
        </View>
    );
};

export default HomeScreen;
