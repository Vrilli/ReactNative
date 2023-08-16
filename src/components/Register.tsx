import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface RegisterScreenProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ setIsLoggedIn }) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirPassword] = useState("");

  const handleRegister = () => {
  
    if (email && password) {
      setIsLoggedIn(true);
      console.log("Registro exitoso");
    } else {
      console.log("Campos incompletos");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Registrate</Text>
      </View>
      <TextInput
        placeholder="Nombre de Usuario"
        style={styles.input}
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
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
      <TextInput
        placeholder="Confirma tu Contraseña"
        style={styles.input}
        secureTextEntry
        value={confirPassword}
        onChangeText={(text) => setConfirPassword(text)}
      />
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login" as never)}
        style={styles.link}
      >
        <Text style={styles.linkText}>
          Ya tienes cuenta? Inicia sesión aquí
        </Text>
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
    bottom: 70,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  link: {
    bottom: 50,
    marginTop: 10,
  },
  linkText: {
    color: "green",
  },
  text: {
    textAlign: "center",
    marginBottom: 150,
    fontWeight: "600",
    fontSize: 50,
  },
});

export default RegisterScreen;
