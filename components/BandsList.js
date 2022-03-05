import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

function AnimalsList({ navigation, breed }) {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={breed}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight
              style={{ padding: 10 }}
              onPress={() => showDetails()}
              underlayColor="tomato"

            >
              <Text
                style={{ fontSize: 18 }}
              >{data.band_name}</Text>
            </TouchableHighlight>
          )
        }}
        keyExtractor={(item) => item.breed}
      />
    </SafeAreaView>
  );
}

export default AnimalsList
