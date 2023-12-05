import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
    return (
        <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
        <Text>ProfileScreen</Text>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
