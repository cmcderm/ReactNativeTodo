import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={"Tasks"} component={TaskScreen}></Tab.Screen>
          <Tab.Screen name={"Calendar"} component={CalendarScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
