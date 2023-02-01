import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const App = () => {
  // const [playing, setPlaying] = useState(false);
  // const togglePlaying = () => {
  //   setPlaying(true);
  // };
  return (
    <SafeAreaView style={{alignItems: 'center', marginTop: 40, flex: 1}}>
      <Text>App Screen Control</Text>
      <Text style={{marginTop: 20}}>Youtube Video</Text>
      <YoutubePlayer
        width={400}
        height={400}
        play={true}
        videoId={'gvkqT_Uoahw'}
      />
      {/* <TouchableOpacity onPress={togglePlaying}>
        <Text>{playing ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default App;
