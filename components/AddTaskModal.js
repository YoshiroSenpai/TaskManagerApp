import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskModal = ({ isVisible, onClose, onSubmit, selectedTask }) => {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTaskText(selectedTask.text);
    } else {
      setTaskText('');
    }
  }, [selectedTask]);

  const handleSubmit = () => {
    if (taskText.trim()) {
      onSubmit(taskText);
      setTaskText('');
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {selectedTask ? 'Edit Task' : 'Add Task'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={taskText}
            onChangeText={setTaskText}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title={selectedTask ? 'Update' : 'Add'} onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddTaskModal;