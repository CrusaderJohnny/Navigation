import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen"; 

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}//c

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false, 
      }}
    >
      <Tabs.Screen
        name="calgary" 
        options={{
          title: "Calgary",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
        initialParams={{ url: "https://www.calgary.ca/home.html" }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{
          title: "Edmonton",
          tabBarIcon: ({ color }) => <TabBarIcon name="building" color={color} />,
        }}
        initialParams={{ url: "https://www.edmonton.ca" }}
      />
    </Tabs>
  );
}
