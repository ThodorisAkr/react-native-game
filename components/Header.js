import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../Constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  header__title: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
