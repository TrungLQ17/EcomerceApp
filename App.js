import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
//import store from './store';
//import { Provider } from 'react-redux';
import { ModalPortal } from "react-native-modals";
import { UserContext } from "./UserContext";

export default function App() {
  return (
    <>
      {/* <Provider store={store}>
        <StackNavigator />
      </Provider> */}
      <UserContext>
        <StackNavigator />
        <ModalPortal />
      </UserContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
