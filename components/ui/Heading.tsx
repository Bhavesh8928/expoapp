import { Text, StyleSheet } from "react-native";

export default function Heading({ title }: { title: string }) {
  return <Text style={styles.heading}>{title}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
});
