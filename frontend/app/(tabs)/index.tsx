import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { View } from '@/components/Themed';
import { ListeningButton } from '@/components/listeningButton';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image style={styles.userImage} />
          <Text style={styles.greeting}>Olá, </Text>
          <Text style={styles.userName}>Daniel</Text>
        </View>
        <TouchableOpacity style={styles.cameraCircle} />
      </View>
      <ListeningButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'transparent',
    marginTop: 30,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  greeting: {
    fontSize: 20,
    color: '#ccccccff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  cameraCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#333333',
    marginRight: 10,
  },
});
