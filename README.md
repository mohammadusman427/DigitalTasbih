# Digital Tasbih

A React Native app for digital tasbih (prayer counter) with advanced features including streak tracking, custom tasbihs, and daily progress monitoring.

## Features

### 🕌 Tasbih Management
- **Predefined Tasbihs**: Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah, Astaghfirullah
- **Custom Tasbihs**: Add your own personal tasbihs
- **Delete Protection**: Predefined tasbihs cannot be deleted, custom ones can be removed with confirmation

### 📊 Progress Tracking
- **Total Counts**: Track total counts for each tasbih
- **Daily Streaks**: Monitor daily consistency with streak counter
- **Last Activity**: See when you last used each tasbih
- **Daily Counts**: Track today's progress separately

### 🎯 User Experience
- **Bottom Sheet Interface**: Modern, intuitive tasbih selection
- **Vibration Feedback**: Haptic feedback when counting
- **Beautiful UI**: Clean, Islamic-themed design
- **Responsive Design**: Works on all screen sizes

### 🔄 Data Persistence
- **Redux Store**: All data stored in Redux with persistence
- **AsyncStorage**: Data persists between app sessions
- **Real-time Updates**: Immediate UI updates when data changes

## How It Works

### 1. Starting a Tasbih
1. Tap the "Start Tasbih" button on the home screen
2. Select from predefined or custom tasbihs in the bottom sheet
3. Tap the screen to count
4. Press "Stop & Save" to save your progress

### 2. Adding Custom Tasbihs
1. Open the tasbih selection bottom sheet
2. Tap "+ Add New Tasbih"
3. Enter your tasbih name
4. Confirm to add it to your list

### 3. Daily Streak System
- **Automatic Tracking**: Streaks are automatically managed
- **Daily Reset**: If you miss a day, your streak resets
- **Consistency Rewards**: See your daily consistency progress

### 4. Data Structure
Each tasbih stores:
```javascript
{
  id: 'unique-id',
  name: 'Tasbih Name',
  isPredefined: boolean,
  counts: number,           // Total lifetime counts
  streak: number,           // Current daily streak
  lastTimeAndDate: string,  // Last activity timestamp
  dailyCount: number,       // Today's count
  lastDate: string          // Last activity date
}
```

## Technical Implementation

### Redux Store Structure
- **tasbihReducer**: Manages all tasbih data and counting state
- **userReducer**: Handles user profile and app state
- **Persistence**: Data automatically saved to AsyncStorage

### Key Components
- **TasbihBottomSheet**: Modern bottom sheet for tasbih selection
- **TasbihCounter**: Full-screen counting interface
- **HomeScreen**: Main app interface with profile and controls

### State Management
- **Real-time Updates**: All components react to state changes
- **Optimistic Updates**: UI updates immediately for better UX
- **Error Handling**: Graceful handling of edge cases

## Getting Started

### Prerequisites
- Node.js >= 18
- React Native development environment
- iOS Simulator or Android Emulator

### Installation
```bash
# Install dependencies
npm install

# iOS (requires macOS)
cd ios && pod install && cd ..
npm run ios

# Android
npm run android
```

### Development
```bash
# Start Metro bundler
npm start

# Run tests
npm test

# Lint code
npm run lint
```

## Architecture

### File Structure
```
src/
├── components/
│   ├── TasbihBottomSheet.js    # Tasbih selection interface
│   └── TasbihCounter.js        # Counting interface
├── screens/
│   ├── Home/
│   │   └── index.js            # Main app screen
│   └── ...                     # Other screens
├── Store/
│   ├── tasbihSlice.tsx         # Tasbih state management
│   ├── userSlice.tsx           # User state management
│   ├── Store.tsx               # Redux store configuration
│   └── rootReducer.tsx         # Root reducer with persistence
└── images/                     # App assets
```

### Key Features Implementation

#### 1. Bottom Sheet Integration
- Uses `@gorhom/bottom-sheet` for smooth animations
- Custom backdrop and handle indicators
- Pan-to-close functionality

#### 2. Streak Management
- Automatic daily streak calculation
- Grace period for missed days
- Real-time streak updates

#### 3. Data Persistence
- Redux Persist with AsyncStorage
- Automatic data recovery
- Optimized storage performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue on GitHub.
 
