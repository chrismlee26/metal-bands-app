import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "react-native-vector-icons"
import data from "./metal"

const Tab = createBottomTabNavigator()

function HomeScreen() {
  console.log(data)
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={{ color: "black" }}>
              {item.band_name}
            </Text>
          </View>
        )
      }}
      keyExtractor={(item) => item.ID}
    />

  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "tomato" },
          tabBarIcon: ({ color, size }) => {
            let iconName

            if (route.name === "Bands") {
              iconName = "bicycle-outline"
            } else if (route.name === "Stats") {
              iconName = "albums-outline"
            } else if (route.name === "Styles") {
              iconName = "beer-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "silver",
        })}
      >
        <Tab.Screen
          name="Bands"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Stats"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Styles"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}