import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from "../../slices/navSlices";

const data = [
    {
        id : "1-uberx",
        title : "Uber X",
        multiplier : 1,
        image :
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id : "2-uberxl",
        title : "Uber XL",
        multiplier : 1.2,
        image :
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id : "3-uberlux",
        title : "Uber LUX",
        multiplier : 1.75,
        image :
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [ selected, setSelected ] = useState();
    const travelTime = useSelector(selectTravelTimeInformation);

    return (
        <SafeAreaView style={ tw`bg-white flex-grow` }>
            <View>
                <TouchableOpacity
                    style={ tw`absolute top-3 left-5 z-50 p-3 rounded-full` }
                    onPress={ () => navigation.navigate("NavigateCard") }
                >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={ tw`text-center py-5 text-xl` }>
                    Select your ride - { travelTime?.distance?.text }
                </Text>
            </View>
            <FlatList
                data={ data }
                keyExtractor={ (item) => item.id }
                renderItem={ ({ item : { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        style={ tw`flex-row items-center justify-between px-10 ${
                            id === selected?.id && "bg-gray-200"
                        }` }
                        onPress={ () => setSelected(item) }
                    >
                        <Image
                            source={ { uri : image } }
                            style={ { width : 100, height : 100, resizeMode : "contain" } }
                        />
                        <View style={ tw`-ml-6 ` }>
                            <Text style={ tw`text-xl font-semibold` }>{ title }</Text>
                            <Text> { travelTime?.duration?.text }</Text>
                        </View>
                        {/*<Text style={ tw`text-xl` }>*/}
                        {/*    { new Intl.NumberFormat("en-ca", {*/}
                        {/*        style : "currency",*/}
                        {/*        currency : "CAD",*/}
                        {/*    }).format(*/}
                        {/*        (travelTime?.duration?.value * SURGE_CHARGE_RATE * multiplier) /*/}
                        {/*        100*/}
                        {/*    ) }*/}
                        {/*</Text>*/}
                    </TouchableOpacity>
                ) }
            />
            <View>
                <TouchableOpacity
                    disabled={ !selected }
                    style={ tw`bg-black py-3 m-1 ${ !selected && "bg-gray-300" }` }
                >
                    <Text style={ tw`text-center text-white text-xl ` }>
                        Choose { selected?.title }
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;
