/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';

import Cards from './components/Cards';
import Videos from './components/Videos';

const App = () => {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 70,
          paddingHorizontal: 30,
          backgroundColor: '#adadad',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => setShowVideos(false)}
          style={{backgroundColor: 'white', padding: 10, borderRadius: 5}}>
          <Text>Imagens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowVideos(true)}
          style={{backgroundColor: 'white', padding: 10, borderRadius: 5}}>
          <Text>Videos</Text>
        </TouchableOpacity>
      </View>

      {showVideos ? <Videos /> : <Cards />}
    </SafeAreaView>
  );
};

export default App;
