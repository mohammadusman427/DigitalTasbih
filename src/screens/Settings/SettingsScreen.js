import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const handleSaveSettings = () => {
    // TODO: Implement save settings logic
    // dispatch(updateUserSettings({name}));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Settings</Text>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Profile Picture</Text>
            <TouchableOpacity style={styles.imageContainer}>
              <Image
                source={require('../../images/file.png')}
                style={styles.profileImage}
              />
              <Text style={styles.changeImageText}>Change Image</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Notifications</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Language</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Theme</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveSettings}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
    padding: 8,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#eee',
  },
  changeImageText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen; 