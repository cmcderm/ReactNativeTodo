import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export interface Task {
  name: string;
  status: boolean;
}

export interface TodoProps {
  task: Task;
}

export default function Todo(props: TodoProps) {
  const [taskStatus, setTaskStatus] = useState(false);
  return (
    <View>
      <Checkbox
        value={taskStatus}
        onValueChange={setTaskStatus}
      />
      <Text>{props.task.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
