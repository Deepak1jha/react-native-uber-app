import React from 'react';
import { Text, View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Maps from "../../components/map/Maps";

const MapScreen = () => {
    return (
      <>
      <View style={tw`h-1/2`}>
          <Maps/>
      </View>
      <View style={tw`h-1/2`}></View>
      </>
    );
};

export default MapScreen;
