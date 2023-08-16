import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/components/LoginScreen";
import RegisterScreen from "./src/components/Register";
import LoggedInScreen from "./src/components/LoggedInScreen"; // Importa el componente LoggedInScreen aquí

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "LoggedIn" : "Login"}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login">
              {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {() => <RegisterScreen setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="LoggedIn">
            {() => <LoggedInScreen setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
