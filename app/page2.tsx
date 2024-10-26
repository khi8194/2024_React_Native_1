import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return <SafeAreaView>
    <Text>Page2</Text>
    <Link href={'/'}>Back to Home</Link>
  </SafeAreaView>
}