import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import QRCode from "react-native-qrcode-svg";
import Fab from "./Fab";

const QRKeyModal = ({ key, onClose }) => (
  <BlurView intensity={90} tint="dark" style={Styles.modalContainer}>
    <View style={Styles.modal}>
      <QRCode value={key} size={264} />
      <Fab
        style={{ marginTop: 24 }}
        action="cancel"
        secondary
        large
        onPress={onClose}
      />
    </View>
  </BlurView>
);

const Styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6,
  },
  modal: {
    display: "flex",
    padding: 24,
    alignItems: "center",
  },
});

export default QRKeyModal;