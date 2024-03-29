import React from "react";
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  View,
  Platform,
} from "react-native";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import Fab from "./Fab";
import Icon from "./Icon";

const KeyboardInput = ({
  onChangeText,
  onPress,
  action,
  value,
  style,
  type = "action",
  disabled,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={8}
      style={[KeyboardInputStyles.container, style]}
    >
      {type === "action" ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            value={value}
            keyboardAppearance="dark"
            placeholder="Aa"
            placeholderTextColor={colors.surface}
            style={[typography.body, KeyboardInputStyles.text]}
            onChangeText={onChangeText}
            multiline
          ></TextInput>
          <Fab
            color="blue"
            action={action}
            onPress={onPress}
            disabled={disabled}
          />
        </View>
      ) : (
        <View style={KeyboardInputStyles.searchContainer}>
          <TextInput
            value={value}
            keyboardAppearance="dark"
            placeholder="Aa"
            placeholderTextColor={colors.surface}
            style={[typography.body, KeyboardInputStyles.searchText]}
            onChangeText={onChangeText}
          ></TextInput>
          <Icon name="search" color="light" />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const KeyboardInputStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.dark,
  },
  text: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.grey,
    marginRight: 8,
    borderRadius: 10,
    color: colors.light,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  searchText: {
    flex: 1,
    marginRight: 8,
    color: colors.light,
  },
});

export default KeyboardInput;
