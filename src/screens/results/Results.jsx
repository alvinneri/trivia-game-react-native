import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
import FIcon from "react-native-vector-icons/Feather";
import { theme } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP } from "react-native-responsive-screen";
import HTML from "react-native-render-html";

const Results = ({ navigation, questions, answers, score }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title>You scored : {`${score}/${questions.length}`}</Card.Title>
        <Card.Divider />
        {questions.map((question, index) => {
          return (
            <View key={index}>
              <View style={{ flexDirection: "row" }}>
                {answers[index]?.isCorrect ? (
                  <FIcon name={"check-circle"} size={25} />
                ) : (
                  <FIcon name={"x-circle"} size={25} />
                )}
                <View
                  style={{
                    width: widthPercentageToDP("80%"),
                    marginLeft: 5,
                    marginBottom: 3,
                    paddingHorizontal: 5,
                    fontSize: widthPercentageToDP("3.5%"),
                  }}
                >
                  <HTML source={{ html: question.question }} />
                </View>
              </View>
              <Card.Divider />
            </View>
          );
        })}
      </Card>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <Button
          buttonStyle={{
            backgroundColor: theme.colors.info,
          }}
          containerStyle={{
            backgroundColor: theme.colors.info,
            marginHorizontal: 5,
          }}
          title="PLAY AGAIN?"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  cardContainer: {
    backgroundColor: "#dedae3",
  },
});
