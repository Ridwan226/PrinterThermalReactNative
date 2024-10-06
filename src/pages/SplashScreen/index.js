import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import RNFS from 'react-native-fs';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    clearCache();
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
    }, 3000);
  }, []);

  const clearCache = async () => {
    try {
      const cacheDirasdectory = RNFS.CachesDirectoryPath;
      await RNFS.unlink(cacheDirectory);
    } catch (error) {}
  };

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
