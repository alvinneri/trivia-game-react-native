import React from "react";
import { StyleSheet } from "react-native";
import { MainNavigator } from "./src/navigation";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";
import store from "./src/store";
import { theme } from "./src/theme";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
