import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import TaskItem from './components/TaskItem';
import AddTaskModal from './components/AddTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  const handleAddTask = (task) => {
    if (selectedTask) {
     
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === selectedTask.id ? { ...t, text: task } : t))
      );
      setSelectedTask(null);
    } else {
     
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), text: task },
      ]);
    }
    setModalVisible(false);
  };


  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  
  const handleEditTask = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        )}
      />
      <AddTaskModal
        isVisible={isModalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedTask(null);
        }}
        onSubmit={handleAddTask}
        selectedTask={selectedTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    top: 10,
  },
  addButton: {
    backgroundColor: '#4B0082', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;