import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <Text style={styles.text}>Inside</Text> */}
        <Button style={styles.button}
        color="red"
        title="SHOW MOVIES"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: '#fff'
  }
});
