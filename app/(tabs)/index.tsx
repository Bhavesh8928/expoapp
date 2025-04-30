import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Heading title="Welcome!" />
      <Card title="React Native App" subtitle="Built with Expo + Router" />
      <Button title="Click Me" onPress={() => alert("Button pressed!")} />
    </View>
  );
}





