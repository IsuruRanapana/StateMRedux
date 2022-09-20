import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/routes/Navigator";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
