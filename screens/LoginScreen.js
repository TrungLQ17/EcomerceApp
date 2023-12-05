import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.screenlogin}>
            <View>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.logotext}>Login In to your Account</Text>
                </View>

                <View style={{ marginTop: 55 }}>
                    <View style={styles.input1}>
                        <MaterialIcons style={{ marginLeft: 10, marginRight: 5 }} name="email" size={24} color="gray" />
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.inputtext} placeholder="enter your Email" />
                    </View>
                </View>

                <View style={{ marginTop: 1 }}>
                    <View style={styles.input1}>
                        <AntDesign name="lock1" size={24} color="gray" style={{ marginLeft: 10, marginRight: 5 }} />
                        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.inputtext} placeholder="enter your Password" />
                    </View>
                </View>

                <View style={styles.choose}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 80 }} />

                <Pressable onPress={() => navigation.navigate("Main")} style={styles.buttomLogin}>
                    <Text style={styles.buttomLoginText}>Login</Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={styles.textSighUp}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>

        </SafeAreaView >
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    screenlogin: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 50,
    },
    logo: {
        width: 150,
        height: 100
    },
    logotext: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 11,
        color: "#041E42",
    },
    input1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30,
    },
    inputtext: {
        color: "gray",
        marginVertical: 10,
        width: 300,
    },
    choose: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttomLogin: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
    },
    buttomLoginText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    textSighUp: {
        textAlign: "center",
        color: "gray",
        fontSize: 16
    }
});