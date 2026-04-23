import { StatusBar, View} from 'react-native';
import Ceep from './src/telas/Ceep';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View>
      <StatusBar/>
      <Ceep/>
    </View>
  );
}