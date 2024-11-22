import {
    Alert,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
   
  import { FontAwesome } from '@expo/vector-icons';
   
  export function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentText}>
            <Text style={styles.subtitle}>Bem vindo,</Text>
            <Text style={styles.userName}>KAUÊ</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('CLICKEI')}>
            <Image
              style={styles.imageProfile}
              source={{ uri: 'https://github.com/kaueksilva.png' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.title}>Tarefas</Text>
            <TouchableOpacity style={styles.addButton}>
              <FontAwesome name='plus' size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.list}></ScrollView>
        </View>
      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#312E38',
    },
    header: {
      backgroundColor: '#28262E',
      height: Platform.OS === 'ios' ? 160 : 128,
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingTop: 64,
      alignItems: 'center',
    },
    contentText: {
      justifyContent: 'center',
      flex: 1,
    },
    subtitle: {
      color: '#999591',
      fontSize: 20,
      fontWeight: 600,
    },
    userName: {
      color: '#ff9000',
      fontSize: 20,
      fontWeight: 800,
    },
    imageProfile: {
      width: 56,
      height: 56,
      borderRadius: 28,
    },
    content: {
      padding: 24,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 800,
    },
    addButton: {
      backgroundColor: '#ff9000',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
    },
   
    list: {},
  });