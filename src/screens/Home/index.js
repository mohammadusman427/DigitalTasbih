import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Vibration,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {user} = useSelector(state => state.userReducer);
  const [count, setCount] = useState(0);
  const [isVibrateEnabled, setIsVibrateEnabled] = useState(true);
  const [lastResetTime, setLastResetTime] = useState(Date.now());
  const [showControls, setShowControls] = useState(false);

  // Settings icon URI
  const settingsIcon = 'https://cdn-icons-png.flaticon.com/512/126/126472.png';

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    if (hour < 22) return 'Good evening';
    return 'Good night';
  };

  // Get emoji based on time
  const getGreetingEmoji = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '☀️';
    if (hour < 18) return '🌤️';
    if (hour < 22) return '🌙';
    return '✨';
  };

  // Reset counter if it's a new day
  useEffect(() => {
    const checkForNewDay = () => {
      const now = new Date();
      const lastReset = new Date(lastResetTime);

      if (
        now.getDate() !== lastReset.getDate() ||
        now.getMonth() !== lastReset.getMonth() ||
        now.getFullYear() !== lastReset.getFullYear()
      ) {
        setCount(0);
        setLastResetTime(Date.now());
      }
    };

    const interval = setInterval(checkForNewDay, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [lastResetTime]);

  const handleScreenTap = () => {
    setCount(prevCount => prevCount + 1);
    if (isVibrateEnabled) {
      Vibration.vibrate(50); // Short vibration feedback
    }
    setShowControls(false);
  };

  const resetCounter = () => {
    setCount(0);
    setLastResetTime(Date.now());
    setShowControls(false);
  };

  const toggleVibration = () => {
    setIsVibrateEnabled(prev => !prev);
    setShowControls(false);
  };

  const navigateToScreen = (screenName) => {
    setShowControls(false);
    navigation.navigate(screenName);
  };

  const toggleControls = () => {
    setShowControls(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/* User Profile Card - Only shown when count is 0 */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          {user?.avatar && (
            <Image
              source={
                avatars.find(a => a.id === user.avatar)?.source ||
                avatars[0].source
              }
              style={styles.profileImage}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>
              {getGreetingEmoji()} {getGreeting()},
            </Text>
            <Text style={styles.nameText}>{user?.name || 'User'}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={toggleControls}
          style={styles.settingsButton}>
          <Image source={{uri: settingsIcon}} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      {/* Main Counter Area */}
      <TouchableWithoutFeedback onPress={handleScreenTap}>
        <View style={styles.counterContainer}>
          {/* Main counter display */}
          <Text style={styles.counterText}>{count}</Text>

          {/* Controls overlay */}
          {showControls && (
            <View style={styles.controlsOverlay}>
              <TouchableOpacity
                onPress={toggleVibration}
                style={styles.controlButton}>
                <Text style={styles.controlText}>
                  Vibration: {isVibrateEnabled ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={resetCounter}
                style={styles.controlButton}>
                <Text style={styles.controlText}>Reset Counter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateToScreen('Azkar')}
                style={styles.controlButton}>
                <Text style={styles.controlText}>Azkar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateToScreen('Settings')}
                style={styles.controlButton}>
                <Text style={styles.controlText}>More Settings</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Reset button (shown when counting) */}
          {count > 0 && !showControls && (
            <TouchableOpacity onPress={resetCounter} style={styles.resetButton}>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

// Mock avatars array (should match your NameScreen avatars)
const avatars = [
  {id: 1, source: require('../imgs/pics/man1.png')},
  {id: 2, source: require('../imgs/pics/mehndi.png')},
  {id: 3, source: require('../imgs/pics/man.png')},
  {id: 4, source: require('../imgs/pics/girl.png')},
  {id: 5, source: require('../imgs/pics/women3.png')},
  {id: 6, source: require('../imgs/pics/women2.png')},
  {id: 7, source: require('../imgs/pics/woman1.png')},
  {id: 8, source: require('../imgs/pics/women.png')},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    margin: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    zIndex: 1,
    position: 'absolute',
    top: 50,
    width: '90%',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#eaeaea',
  },
  textContainer: {
    marginLeft: 15,
  },
  greetingText: {
    fontSize: 16,
    color: '#666',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  settingsButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f0f6ff',
  },
  settingsIcon: {
    width: 24,
    height: 24,
  },
  counterContainer: {
    flex: 1,
    backgroundColor: '#B9D4AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: 120,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  controlsOverlay: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
    width: '80%',
    alignItems: 'center',
  },
  controlButton: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  controlText: {
    color: '#333',
    fontSize: 18,
  },
  resetButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resetText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
