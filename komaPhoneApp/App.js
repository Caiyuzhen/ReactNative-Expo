import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>欢迎画面</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet. create({
	container: {
		flex: 1,
		backgroundColor: '(rgb 242, 242, 247)',
		alignItems: 'center',
		justifyContent: 'center',
	}, 
	pageTitle: {
		fontSize: 64,
		color: 'rgb(0, 122, 255)',
	}
})

