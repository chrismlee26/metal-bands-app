import React from 'react';
import { band } from '../metal.json'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "tomato" },
      })}
    >
      <Tab.Screen
        name="Cats"
        children={() => <AnimalsList breed={cats} navigation={navigation} />}
      />
      <Tab.Screen
        name="Dogs"
        children={() => <AnimalsList breed={dogs} navigation={navigation} />}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen
