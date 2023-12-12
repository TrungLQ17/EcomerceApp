import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import jwt_decode from "jwt-decode"
//import { UserType } from "../UserContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
const AddressScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    // const {userId,setUserId} = useContext(UserType)
    // useEffect(() => {
    //   const fetchUser = async() => {
    //       const token = await AsyncStorage.getItem("authToken");
    //       const decodedToken = jwt_decode(token);
    //       const userId = decodedToken.userId;
    //       setUserId(userId)
    //   }

    //   fetchUser();
    // },[]);
    // console.log(userId)
    // const handleAddAddress = () => {
    //     const address = {
    //         name,
    //         mobileNo,
    //         houseNo,
    //         city,
    //     }

    //     axios.post("http://localhost:8000/addresses",{userId,address}).then((response) => {
    //         Alert.alert("Success","Addresses added successfully");
    //         setName("");
    //         setMobileNo("");
    //         setHouseNo("");
    //         setCity("");

    //         setTimeout(() => {
    //           navigation.goBack();
    //         },500)
    //     }).catch((error) => {
    //         Alert.alert("Error","Failed to add address")
    //         console.log("error",error)
    //     })
    // }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={25} color="#B00406" style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 20 }}>New Addresses</Text>
                </Pressable>
            </View>
            <Text style={styles.dividing_line} />
            <View style={styles.formContainer}>
                <Text style={styles.title}>Contact</Text>
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor={"gray"}
                    placeholder="Full Name"
                />
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor={"gray"}
                    placeholder="Phone Number"
                />

                <Text style={styles.title}>Address</Text>
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor={"gray"}
                    placeholder="City, District, Ward"
                />
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor={"gray"}
                    placeholder="Street Name, Building, House No."
                />

                <Pressable style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Address</Text>
                </Pressable>
            </View>
        </ScrollView >
    );
};

export default AddressScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    header: {
        padding: 10,

    },
    formContainer: {
        padding: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 10,
    },
    inputField: {
        padding: 10,
        borderColor: "lightgray",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "#B00406",
        borderRadius: 6,
        padding: 15,
        marginTop: 40,
        alignItems: "center",
        marginBottom: 30,
    },
    addButtonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },
    dividing_line: {
        height: 0.5,
        borderColor: "lightgray",
        borderWidth: 1,
    },
});

