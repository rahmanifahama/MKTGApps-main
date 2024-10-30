import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

// Screens
import Dashboard from "../Screens/NavigatorTabs/Dashboard";
import Journal from "../Screens/NavigatorTabs/Journal";
import Goals from "../Screens/NavigatorTabs/Goals";
import Records from "../Screens/NavigatorTabs/Records";
import Settings from "../Screens/Settings/ProfileSettings";
import HomeScreen from "../Screens/NavigatorTabs/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" color={color} size={size} />
        ),
        headerTitle: "",
        headerRight: () => (
          <Entypo
            name="bell"
            size={24}
            color={"black"}
            onPress={() => navigation.goBack()}
            style={tw`mr-5`}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="dashboard" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Journal"
      component={Journal}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="book" color={color} size={size} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Goals"
      component={Goals}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="star" color={color} size={size} />
        ),
      }}
    /> */}
    {/* <Tab.Screen
      name="Records"
      component={Records}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="database" color={color} size={size} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="dots-three-horizontal" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const TabNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default TabNavigator;
