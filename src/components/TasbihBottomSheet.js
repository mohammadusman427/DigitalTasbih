import React, { useState, useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTasbih, deleteTasbih, startTasbih } from '../Store/tasbihSlice';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const TasbihBottomSheet = ({ visible, onClose, onStartTasbih }) => {
  const dispatch = useDispatch();
  const { tasbihs } = useSelector(state => state.tasbihReducer);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTasbihName, setNewTasbihName] = useState('');
  
  // Bottom sheet ref
  const bottomSheetRef = useRef(null);

  // Variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleStartTasbih = (tasbih) => {
    dispatch(startTasbih(tasbih));
    onStartTasbih(tasbih);
  };

  const handleAddTasbih = () => {
    if (newTasbihName.trim()) {
      dispatch(addTasbih({ name: newTasbihName.trim() }));
      setNewTasbihName('');
      setShowAddModal(false);
    }
  };

  const handleDeleteTasbih = (tasbih) => {
    if (tasbih.isPredefined) {
      Alert.alert('Cannot Delete', 'Predefined tasbihs cannot be deleted.');
      return;
    }

    Alert.alert(
      'Delete Tasbih',
      `Are you sure you want to delete "${tasbih.name}"? All counts and data will be lost permanently.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => dispatch(deleteTasbih(tasbih.id)),
        },
      ]
    );
  };

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

  const renderTasbihItem = ({ item }) => (
    <View style={styles.tasbihItem}>
      <View style={styles.tasbihInfo}>
        <Text style={styles.tasbihName}>{item.name}</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statText}>Total: {item.counts}</Text>
          <Text style={styles.statText}>Streak: {item.streak} days</Text>
        </View>
        {item.lastTimeAndDate && (
          <Text style={styles.lastTimeText}>
            Last: {new Date(item.lastTimeAndDate).toLocaleDateString()}
          </Text>
        )}
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => handleStartTasbih(item)}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
        {!item.isPredefined && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteTasbih(item)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  // Handle sheet changes
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  // Handle close
  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible ? 1 : -1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheetBackground}
      handleIndicatorStyle={styles.indicator}
    >
      <BottomSheetView style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select Tasbih</Text>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Add Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowAddModal(true)}>
          <Text style={styles.addButtonText}>+ Add New Tasbih</Text>
        </TouchableOpacity>

        {/* Tasbih List */}
        <FlatList
          data={tasbihs}
          renderItem={renderTasbihItem}
          keyExtractor={item => item.id}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />

        {/* Add Tasbih Modal */}
        {showAddModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Tasbih</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter tasbih name..."
                value={newTasbihName}
                onChangeText={setNewTasbihName}
                autoFocus={true}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    setShowAddModal(false);
                    setNewTasbihName('');
                  }}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleAddTasbih}>
                  <Text style={styles.confirmButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: '#ccc',
    width: 40,
    height: 4,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#2F855A',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tasbihItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tasbihInfo: {
    flex: 1,
  },
  tasbihName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  statText: {
    fontSize: 12,
    color: '#666',
    marginRight: 15,
  },
  lastTimeText: {
    fontSize: 11,
    color: '#999',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#2F855A',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginRight: 8,
  },
  startButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#2F855A',
    paddingVertical: 12,
    marginLeft: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TasbihBottomSheet; 