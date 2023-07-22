import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router = useRouter();
  const { slug } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: "Slug Page", headerShown: true }} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Slug Page</Text>
          <Text>Slug Param {slug}</Text>
          <Text style={styles.subtitle}>
            This is the next page of your app.
          </Text>

          <Pressable onPress={() => router.back()}>
            <Text style={styles.textButton}>Go Back Home</Text>
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
