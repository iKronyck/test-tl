import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RNAsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../components";
import { STORAGE_TASK } from "../utils/const";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // await RNAsyncStorage.clear();
      const values = await RNAsyncStorage.getItem(STORAGE_TASK);
      if (values && values.length > 0) {
        console.log({ values });
        const setter = JSON.parse(values);
        setTasks(setter);
      } else {
        console.log("Empty");
      }
    };
    fetchTasks();
  }, []);

  const navigateToTask = () => {
    navigation.push("AddTask");
  };

  return (
    <View style={styles.container}>
      <Button onPress={navigateToTask} title="Add To Do" />
      {/* Here add your Code for Task List and button to navigate to add new tasks, also remember todo's should be able to be deleted. */}
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View key={`task-${index}`}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
