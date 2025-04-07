import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import chat from '../assets/icon/chat.png';
import home from '../assets/icon/home.png';
import menu from '../assets/icon/menu.png';
import perfil from '../assets/icon/perfil.png';

export default function Page({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main</Text>
      <View style={styles.block}>
        <View style={styles.icon}>
          <TouchableOpacity style={styles.imgB} onPress={null}>
            <Image style={styles.img} source={home} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgB} onPress={null}>
            <Image style={styles.img} source={perfil} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgB} onPress={null}>
            <Image style={styles.img} source={chat} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgB} onPress={null}>
            <Image style={styles.img} source={menu} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6a9cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
  block: {
    width: '100%',
    height: 300,
    borderRadius: 40,
    top: 480,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icon: {
    top:20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  img: {
    width: 28,
    height: 28,
  },
});
