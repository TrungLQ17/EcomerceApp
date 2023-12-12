import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
} from "react-native";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
//import { UserType } from "../UserContext";

const AddAddressScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
            <View style={styles.header}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={25} color="#B00406" style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 20 }}>New Addresses</Text>
                </Pressable>
            </View>
            <Text style={styles.dividing_line} />
            <Pressable style={styles.AddNewAdress}
                onPress={() => navigation.navigate("Add")}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 70 }}>
                    <Ionicons name="add-circle-outline" size={24} color="#B00406" margin={10} />
                    <Text style={{ fontSize: 16, color: "#B00406" }}>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#B00406" />
                </View>
            </Pressable>
        </ScrollView>
    );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
    header: {
        padding: 10,
    },
    AddNewAdress: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingVertical: 7,
        paddingHorizontal: 5,
    },
    dividing_line: {
        height: 0.5,
        borderColor: "lightgray",
        borderWidth: 1,
        marginTop: 10,
    },
});
