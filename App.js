import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "react-native-vector-icons"
import data from "./metal"

const Tab = createBottomTabNavigator()

function HomeScreen() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <SafeAreaView>
            <View
              style={{
                padding: 5,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}

            >
              <View>
                <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>{item.band_name}</Text>
                <Text>{item.formed}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: "gray", fontSize: 18, fontWeight: '700' }}>{item.origin}</Text>
                <Text>{Intl.NumberFormat().format(item.fans * 1000)}</Text>
              </View>
            </View>
          </SafeAreaView>
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