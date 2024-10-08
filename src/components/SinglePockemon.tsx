import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { images } from "../config/CONSTANTS";
import { Pokemon } from "../config/types";

const SinglePokemon = ({item}: {item: Pokemon}) => {
    const {navigate} = useNavigation();
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
                navigate('SinglePokemon', {name: item.name});
            }}>
            <Image source={images[item.id]} style={styles.image}/>
            <Text>{item.id}. {item.name}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(SinglePokemon);

const styles = StyleSheet.create({
    image: { width: 100, height: 100 },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        gap: 10,
    },
});