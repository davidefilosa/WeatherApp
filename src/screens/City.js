import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

const City = ({ weatherData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.image}
      >
        <Text style={[styles.cityText, styles.cityName]}>
          {weatherData.name}
        </Text>
        <Text style={[styles.cityText, styles.countryName]}>
          {weatherData.country}
        </Text>
        <View style={styles.populationWrapper}>
          <AntDesign name="user" size={50} color="white" />
          <Text
            style={styles.populationText}
          >{`Population: ${weatherData.population}`}</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={styles.riseSetText}>
            {moment(weatherData.sunrise).format("h:mm:ss a")}
          </Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={styles.riseSetText}>
            {moment(weatherData.sunset).format("h:ss:mm a")}
          </Text>
        </View>
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

  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },

  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
    fontWeight: "bold",
  },

  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
