import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React, {useRef} from 'react';
import {LogBox} from 'react-native';
import Route from './routes';

LogBox.ignoreAllLogs();
export const navigateRef = createNavigationContainerRef();

const MainApp = () => {
  const routeNameRef = useRef();

  return (
    <NavigationContainer ref={navigateRef}>
      <Route />
    </NavigationContainer>
  );
};

export default function App() {
  return <MainApp />;
}
