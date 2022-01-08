import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../Constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screen__title}> Start a New Game!</Text>
      <Card style={styles.input__container}>
        <Text>Select a Number!</Text>
        <TextInput placeholder="Enter a Number" />
        <View style={styles.button__container}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.second} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  screen__title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input__container: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button__container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
