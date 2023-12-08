import React, { useState, useEffect } from 'react';
import { ModalPortal } from 'react-native-modals';
import { UserContext } from './UserContext';
import StackNavigator from './navigation/StackNavigator';
import SplashScreenComponent from './screens/SplashScreen'; // Import từ file SplashScreen.js

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSkip = () => {
    setIsLoading(false); // Kết thúc màn hình SplashScreen khi người dùng bấm "Skip"
  };


  return (
    <UserContext>
      {isLoading ? (
        <SplashScreenComponent onSkip={handleSkip} />
      ) : (
        <StackNavigator />
      )}
      <ModalPortal />
    </UserContext>
  );
};

export default App;
