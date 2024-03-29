import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../styles/colors";
import Icon from "./Icon";

const fabColors = {
  blue: colors.bluePrimary,
  teal: colors.tealSecondary,
  lime: colors.limeAccent,
};

const Fab = ({
  color = "lime",
  action,
  secondary = false,
  large = false,
  onPress,
  disabled = false,
  style,
}) => {
  const dimensions = large ? 48 : 36;
  const fabColor = fabColors[color];

  const fabShadow = () =>
    secondary || disabled
      ? {}
      : {
          shadowColor: fabColor,
          shadowOpacity: 0.25,
          shadowRadius: 12,
        };

  const fabBase = {
    height: dimensions,
    width: dimensions,
    borderColor: disabled ? colors.grey : fabColor,
    backgroundColor: disabled
      ? colors.grey
      : secondary
      ? colors.darkSurface
      : fabColor,
    ...fabShadow(),
  };

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={secondary ? colors.dark : fabColor}
      onPress={onPress}
      disabled={disabled}
      style={[FabStyles.container, fabBase, style]}
    >
      <Icon
        name={action}
        color={color === "blue" || (secondary && !disabled) ? "light" : "dark"}
      />
    </TouchableHighlight>
  );
};

const FabStyles = StyleSheet.create({
  container: {
    display: "flex",
    borderWidth: 1,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Fab;
