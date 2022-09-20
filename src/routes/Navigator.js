import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={Home} />
    </Stack.Navigator>
  );
}
