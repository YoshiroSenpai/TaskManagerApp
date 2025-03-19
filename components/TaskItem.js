import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task.text}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <Text style={styles.button}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Text style={styles.button}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    color: 'blue',
  },
});

export default TaskItem;