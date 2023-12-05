import { StyleSheet, Text, View, ScrollView, Pressable,Alert } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
//import { useDispatch, useSelector } from "react-redux";
//import { cleanCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import RazorpayCheckout from "react-native-razorpay";

const ConfirmationScreen = () => {
    return(
        <ScrollView style={{ marginTop: 55, flex: 1, backgroundColor: "white" }}>
        {/* thanh tìm kiếm */}
        <View style={styles.tabSearch}>
          <Pressable style={styles.tabSearchIcon}>
            <AntDesign style={{ paddingLeft: 10 }} name="search1" size={22} color="black" />
            <TextInput placeholder="Search product " />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>
      </ScrollView>
    );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
    tabSearch: {
        backgroundColor: "#00CED1",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      },
      tabSearchIcon: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 7,
        gap: 10,
        backgroundColor: "white",
        borderRadius: 3,
        height: 38,
        flex: 1,
      },
});
