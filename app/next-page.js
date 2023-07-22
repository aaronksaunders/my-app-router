import { Link, Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Next Page", headerShown: true }} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Next Page</Text>
          <Text style={styles.subtitle}>
            This is the next page of your app.
          </Text>
          <Link href={"/"}>
            <Text style={styles.textButton}>Go Back Home</Text>
          </Link>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.textButton}>Go Back Home (Pressable)</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  textButton: {
    fontSize: 36,
    fontWeight: "600",
    color: "#38434D",
  },
});
