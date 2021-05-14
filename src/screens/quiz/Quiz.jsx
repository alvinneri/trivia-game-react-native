import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Card } from "react-native-elements";
import { theme } from "../../theme";
import HTML from "react-native-render-html";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Quiz = ({ navigation, questionNo, questions, getAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryStyle}>{questions[questionNo].category}</Text>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.questionContainer}>
          <HTML source={{ html: questions[questionNo].question }} />
        </View>

        <Text style={{ textAlign: "center", marginVertical: 20 }}>{`${
          questionNo + 1
        }/${questions.length}`}</Text>
      </Card>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        {questionNo + 1 === questions.length ? (
          <Button
            buttonStyle={{
              backgroundColor: theme.colors.info,
            }}
            containerStyle={{
              backgroundColor: theme.colors.info,
              marginHorizontal: 5,
            }}
            title="SHOW RESULTS"
            onPress={() => navigation.navigate("Results")}
          />
        ) : (
          <>
            <Button
              buttonStyle={{
                backgroundColor: theme.colors.info,
              }}
              containerStyle={{
                backgroundColor: theme.colors.info,
                marginHorizontal: 5,
              }}
              title="TRUE"
              onPress={() => getAnswer("True")}
            />
            <Button
              buttonStyle={{ backgroundColor: theme.colors.danger }}
              containerStyle={{
                backgroundColor: theme.colors.danger,
                marginHorizontal: 5,
              }}
              title="FALSE"
              onPress={() => getAnswer("False")}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  cardContainer: {
    backgroundColor: "#dedae3",
    marginVertical: 20,
  },
  questionContainer: {
    width: widthPercentageToDP("80%"),
    marginLeft: 5,
    marginBottom: 3,
    paddingHorizontal: 5,
  },
  categoryStyle: {
    marginVertical: 20,
    fontSize: widthPercentageToDP("6.5%"),
  },
});
