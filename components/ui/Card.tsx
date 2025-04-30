import { router, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Card({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle: string;
  id: number;
}) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        // here you are inside the tab group folder
        router.push(`/explore/${id}`);

        // Use this full pathname object syntax when you're outside the (tabs) group
        // router.push({
        //   pathname: "/(tabs)/explore/[id]",
        //   params: { id: id.toString() },
        // });
      }}
      style={styles.card}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#555",
  },
});
