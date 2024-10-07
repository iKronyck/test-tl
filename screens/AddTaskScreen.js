import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import RNAsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_TASK } from "../utils/const";
import { Button } from "../components";

export default function AddTaskScreen({ route, navigation }) {
  const [task, setTask] = useState("");

  const onHandleChange = (value) => {
    setTask(value);
  };

  const createNewTask = async () => {
    try {
      if (task && task.trim().length > 0) {
        const currentValues = await RNAsyncStorage.getItem(STORAGE_TASK);
        const tasks = JSON.parse(currentValues) ?? [];
        tasks.push({ title: task });
        await RNAsyncStorage.setItem(STORAGE_TASK, JSON.stringify(tasks));
        navigation.goBack();
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <View style={styles.container}>
      {/* Here Add your Code to add Tasks */}
      <TextInput
        value={task}
        placeholder="Insert something..."
        onChangeText={onHandleChange}
        keyboardType="default"
      />
      <Button onPress={createNewTask} title="Create new task" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
