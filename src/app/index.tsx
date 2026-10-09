
import {
  Image,      
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { router } from 'expo-router';

import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen() {

  return (
    <View style={styles.container}>

      <Header />

      <ScrollView
            showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        style={styles.scrollContainer}
      >

        <Image
          source={require('./primeira foto.jpg')}
              style={styles.heroImage}
        />

        <Text style={styles.smallTitle}>
          POSITIVE PRACTICE.
        </Text>

        <Text style={styles.title}>
         Results {'\n'}
          Proven.
        </Text>

        <Text style={styles.description}>
          Learn to better care for and understand
          animals through practical and
          positive education.
        </Text>

        <PrimaryButton
           title="Start Your Journey"
  onPress={() => router.push('/journey')}

        />

      </ScrollView>

      <BottomNav
        onHome={() => router.push('/')}
        onCourses={() => router.push('/programs'as any)}
        onContact={() => router.push('/contact'as any)}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF9D9',
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  scrollContainer: {
    flex: 1,
     marginBottom: 70,
  },

  heroImage: {
    width: '100%',
    height: 260,
    borderRadius: 25,
    marginBottom: 25,
  },

  smallTitle: {
    fontSize: 8,
    fontWeight: '700',
    color: '#2A9D78',
    marginBottom: 5,
  },

  title: {
    fontSize: 31,
    lineHeight: 31,
    fontWeight: '800',
    color: '#173B4A',
    marginBottom: 15,
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: '#4C5A5E',
    marginBottom: 20,
  },

});