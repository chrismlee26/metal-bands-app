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
                <Text style={{ color: "gray", fontSize: 18, fontWeight: '500' }}>{item.origin}</Text>
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

const count = data.length
const fans = data.reduce((acc, data) => acc + data.fans, 0)
const countries = data.reduce((acc, data) => acc.add(data.origin), new Set())
const active = data.reduce((acc, data) => acc + (data.split.length !== 4 ? 1 : 0), 0)
const split = data.reduce((acc, data) => acc + (data.split.length === 4 ? 1 : 0), 0)
const styles = data.reduce((acc, data) => acc.add(data.style), new Set())



function StatsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: "black", fontSize: 30, fontWeight: '700' }}>Metal 🤘</Text>
      <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>Count: {count}</Text>
      <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>Fans: {Intl.NumberFormat().format(fans * 1000)}</Text>
      <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>Countries: {countries.size}</Text>
      <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>Active: {active}</Text>
      <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>Split: {split}</Text>
      <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>Styles: {styles.size}</Text>
    </SafeAreaView>
  )
}

function StylesScreen() {
  const stylesArray = Array.from(styles).toString()
  const formatStyles = stylesArray.split(",").join("\n")
  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={{ color: "black", fontSize: 18, fontWeight: '700' }}>{formatStyles}</Text>
      </View>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#111" },
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
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#555555",
        })}
      >
        <Tab.Screen
          name="Bands"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Stats"
          component={StatsScreen}
        />
        <Tab.Screen
          name="Styles"
          component={StylesScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}