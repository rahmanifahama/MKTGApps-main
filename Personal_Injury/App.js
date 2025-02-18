// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Context Providers
import { ThemeProvider } from "./Apps/Contexts/ThemeContext";
import { UserContextProvider } from "./Apps/Contexts/UserContext";
import { SignUpProvider } from "./Apps/Contexts/SignUpContext";

// Navigation Components
import AuthenticationNavigator from "./Apps/Navigation/AuthenticationNavigator";
import TabNavigator from "./Apps/Navigation/TabNavigator";
import SettingsNavigator from "./Apps/Navigation/SettingsNavigator";
import ChartsNavigator from "./Apps/Navigation/ChartsNavigator";
import LogNavigator from "./Apps/Navigation/LogNavigator";

const Stack = createNativeStackNavigator();

/**** Notes:
 * Using nested screens in the NavigationContainer.
 * The NavigationContainer is the root component for navigation.
 * The child screens are located in the navigation folder within Apps.
 ****/

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserContextProvider>
        <SignUpProvider>
          <ThemeProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen
                  name="AuthenticationNavigator"
                  options={{ headerShown: false }}
                >
                  {() => (
                    <SignUpProvider>
                      <AuthenticationNavigator Stack={Stack} />
                    </SignUpProvider>
                  )}
                </Stack.Screen>

                <Stack.Screen
                  name="TabNavigator"
                  component={TabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SettingsNavigator"
                  component={SettingsNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ChartsNavigator"
                  component={ChartsNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LogsNavigator"
                  component={LogNavigator}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </SignUpProvider>
      </UserContextProvider>
    </GestureHandlerRootView>
  );
}
