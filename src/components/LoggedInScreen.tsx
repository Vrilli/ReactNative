import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface LoggedInScreenProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoggedInScreen: React.FC<LoggedInScreenProps> = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido, has iniciado sesión con éxito.</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginBottom: 150,
    fontSize: 18,
    color: "black",
    fontWeight: "600"
  }
});

export default LoggedInScreen;
