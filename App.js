import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';

const SignInHeader = () => (
  <Image
    resizeMode="contain"
    source={{
      uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcfb867603411cb1c8d76b14ec2874726fc38e70fdab71c8488e2b537aa57e03?apiKey=96ea9f5d0bf44cb0a1f0c9f57f91d899&",
    }}
    style={styles.headerImage}
  />
);

const SignInTitle = () => <Text style={styles.signInTitle}>Sign In</Text>;

const AuthFormField = ({ placeholder }) => (
  <View style={styles.formField}>
    <Text style={styles.formFieldText}>{placeholder}</Text>
  </View>
);

const FooterText = ({ text, actionText, onPressAction }) => (
  <View style={styles.footerTextContainer}>
    <Text style={styles.footerText}>
      {text}{" "}
      <Text style={styles.footerActionText} onPress={onPressAction}>
        {actionText}
      </Text>
    </Text>
  </View>
);

const SignInButton = ({ title }) => (
  <TouchableOpacity style={styles.signInButtonContainer}>
    <Text style={styles.signInButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SignInScreen = () => (
  <View style={styles.container}>
    <SignInHeader />
    <SignInTitle />
    <AuthFormField placeholder="Email Address" />
    <AuthFormField placeholder="Password" />
    <SignInButton title="Log In" />
    <FooterText
      text="Don’t have an account?"
      actionText="Sign Up"
      onPressAction={() => console.log("Navigate to Sign Up")}
    />
  </View>
);

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SignInHeader/>
      <SignInTitle style={styles.signInTitle}></SignInTitle>
      <AuthFormField placeholder="Email Address" />
      <AuthFormField placeholder="Password" />
      <SignInButton title="Log In" />
      <FooterText
        text="Don’t have an account?"
        actionText="Sign Up"
        onPressAction={() => console.log("Navigate to Sign Up")}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    fontWeight: "400",
    margin: "0 auto",
    padding: 44,
  },
  headerImage: {
    alignSelf: "center",
    width: 154,
    height: 100,
  },
  signInTitle: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
  },
  formField: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.07)",
    marginTop: 16,
    padding: 18,
  },
  formFieldText: {
    fontSize: 16,
    fontFamily: "Poppins, sans-serif",
  },
  signInButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#000",
    marginTop: 24,
    padding: 18,
  },
  signInButtonText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins, sans-serif",
  },
  footerTextContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  footerText: {
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
  },
  footerActionText: {
    textDecorationLine: "underline",
    color: "#AB9A63",
    fontWeight: "bold",
  },
});