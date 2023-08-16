import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface LoginScreenProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setIsLoggedIn }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
   
    if (email === "user@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
      console.log("Inicio de sesión exitoso");
    } else {
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text2}>
          ¡La vaca que supera todas las expectativas!
        </Text>
      </View>
      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register" as never)} // Forzar el tipo
        style={styles.link}
      >
        <Text style={styles.linkText}>No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
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
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    bottom: 100,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FADF23",
    padding: 10,
    bottom: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  link: {
    marginTop: 10,
    bottom: 70
  },
  linkText: {
    color: "blue",
  },
  text: {
    textAlign: "center",
    marginBottom: 150,
    fontWeight: "600",
    fontSize: 50,
  },
  text2: {
    bottom: 140,
    fontSize: 18,
  },
});

export default LoginScreen;
