import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../store/action";
import { Text, Button } from "react-native-elements";
import { theme } from "../../theme";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const navigateToQuiz = () => {
    navigation.navigate("Quiz");
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <Text h4 style={styles.headerText}>
          Welcome to the Trivia Challenge!
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.headerText}>
          You will be presented with 10 True or False questions.
        </Text>
        <Text style={styles.headerText}>Can you score 100%?</Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Button
          title="BEGIN"
          onPress={navigateToQuiz}
          buttonStyle={{
            backgroundColor: theme.colors.info,
          }}
          containerStyle={{
            backgroundColor: theme.colors.info,
            marginHorizontal: 5,
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  headerText: {
    textAlign: "center",
  },
});
