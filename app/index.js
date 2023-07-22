import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <>
    <Stack.Screen  options={{ title : "Home Page", headerShown: true}}/>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={"/next-page"}>
          <Text style={styles.textButton}>Go To Next Page</Text>
        </Link>
        <Link href={{
          pathname : "/[slug]",
          params: {slug : new Date()}
        }}>
          <Text style={styles.textButton}>Go To Slug Page</Text>
        </Link>
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
