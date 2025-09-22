import React from "react";

import { View, Text } from "react-native";

const NotFoundScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
    </Text>
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        The page you are looking for does not exist.
      </Text>

    </View>
  );
};

export default NotFoundScreen;