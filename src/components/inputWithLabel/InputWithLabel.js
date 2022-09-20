import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function InputWithLabel({
  labelText,
  keyboardType,
  onChange,
  value,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={styles.textInput}
        keyboardType={keyboardType}
        maxLength={5}
        placeholder={"0"}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#EEE3CB",
    width: 100,
    height: 50,
    fontSize: 16,
    textAlign: "right",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
