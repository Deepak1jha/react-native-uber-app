import React from 'react';
import { Image, View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../../components/navOptions/NavOptions";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env"
import { setDestination, setOrigin } from "../../slices/navSlices";
import { useDispatch } from "react-redux";
import NavFavorites from "../../components/navFavorite/NavFavorite";

const HomeScreen = () => {

    const dispatch = useDispatch();
    return (
        <View style={ { marginTop : Constants.statusBarHeight, paddingLeft : 15 } }>
            <View style={ tw`p-5` }>
                <Image style={ { height : 100, width : 100, resizeMode : "contain" } }
                       source={ { uri : "https://links.papareact.com/gzs" } }/>
            </View>
            <GooglePlacesAutocomplete
                placeholder="Where From?"
                nearbyPlacesAPI="GooglePlacesSearch"
                returnKeyType={ "search" }
                fetchDetails={ true }
                debounce={ 400 }
                styles={ { container : { flex : 0 }, textInput : { fontSize : 18 } } }
                query={ { key : GOOGLE_MAPS_API_KEY, language : "en" } }
                enablePoweredByContainer={ false }
                minLength={ 2 }
                onPress={ (data, details = null) => {
                    dispatch(
                        setOrigin({
                            location : details.geometry.location,
                            description : data.description,
                        })
                    );
                    dispatch(setDestination(null));
                } }
            />
            <NavOptions/>
            <NavFavorites/>
        </View>
    );
};

export default HomeScreen;
