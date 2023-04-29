import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { weatherType } from "../utilities/weatherType";

function CurrentWeather({ weatherData }) {
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {
          backgroundColor:
            weatherType[weatherData.weather[0].main].backgroundColor,
        },
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherData.weather[0].main].icon}
          size={100}
          color="black"
        />
        <Text style={styles.temp}>{weatherData.main.temp}°</Text>
        <Text style={styles.feels}>{weatherData.main.feels_like}°</Text>
        <View style={styles.textContainer}>
          <Text
            style={styles.highLow}
          >{`Low: ${weatherData.main.temp_min}°`}</Text>
          <Text
            style={styles.highLow}
          >{`High: ${weatherData.main.temp_max}°`}</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <Text
          style={styles.description}
        >{`It is ${weatherData.weather[0].description}`}</Text>
        <Text style={styles.message}>
          {weatherType[weatherData.weather[0].main].message}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  temp: {
    color: "black",
    fontSize: 48,
  },

  feels: { color: "black", fontSize: 30 },

  highLow: {
    color: "black",
    fontSize: 20,
    marginLeft: 10,
  },

  textContainer: {
    flexDirection: "row",
  },

  bodyContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },

  description: { color: "black", fontSize: 48 },

  message: { color: "black", fontSize: 30 },
});

export default CurrentWeather;
