import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
//import { useDispatch, useSelector } from "react-redux";
//   import {
//     decrementQuantity,
//     incementQuantity,
//     removeFromCart,
//   } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {

  return (
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

export default CartScreen;

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
