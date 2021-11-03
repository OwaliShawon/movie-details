import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, AppRegistry, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';

const image = { uri: "https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" };

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(response => response.json())
    .then(data => setMovies(data));
  },[])

  console.log(movies);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <Text style={styles.text}>Inside</Text> */}
        <Button style={styles.button}
        color="red"
        title="SHOW MOVIES"
        onPress={() => <Home />}
      />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  )};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: '#fff'
  }
});

// export default App;