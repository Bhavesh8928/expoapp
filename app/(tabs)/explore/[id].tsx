// Code =  app/(tabs)/explore/[id].tsx

import { getPosts } from "@/lib/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      const found = data.find((item: any) => item.id.toString() === id);
      setPost(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} />;
  if (!post) return <Text style={styles.error}>Post not found</Text>;

  return (
    <View style={styles.container}>
      <Text>Item ID: {id}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  error: { color: "red", textAlign: "center", marginTop: 50 },
});
