import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";  

export default function WebPage({ url }: { url: string }) {
  return (
    <SafeAreaView style={styles.container}>  
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
