import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      ></ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/sky.jpg")}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornflowerblue",
    marginTop: StatusBar.currentHeight || 0,
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
