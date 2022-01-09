import React, { useState, useRef, useEffect } from "react";
import { Alert, View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";

import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currGuess, setCurrGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currLow = useRef(1);
  const currHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currGuess < props.userChoice) ||
      (direction === "greater" && currGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currHigh.current = currGuess;
    } else {
      currLow.current = currGuess;
    }

    const nextNumber = generateRandomBetween(
      currLow.current,
      currHigh.current,
      currGuess
    );
    setCurrGuess(nextNumber);
    setRounds((currRounds) => currRounds + 1);
  };

  useEffect(() => {
    if (currGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currGuess, onGameOver, userChoice]);

  return (
    <View style={styles.screen}>
      <Text>Computer's Check</Text>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card style={styles.button}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
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
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
