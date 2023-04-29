import { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import Tabs from "./src/components/Tabs";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`
      );

      const data = await resp.json();
      setWeather(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location not granted");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      if (location !== null) {
        await fetchWeatherData();
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },

  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
