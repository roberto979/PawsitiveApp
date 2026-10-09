
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const stories = [
  { name: 'A More Confident Caregiver', role: 'Illustrative learner story', text: 'Learning about animal body language can help a caregiver respond with more patience and understanding.' },
  { name: 'Small Steps, Real Progress', role: 'Illustrative learner story', text: 'Consistent routines and positive reinforcement can help make learning clearer for both animals and people.' },
  { name: 'A Passion for Animal Wellbeing', role: 'Illustrative learner story', text: 'Building practical knowledge can inspire learners to keep improving their animal care skills.' },
];

export default function StoriesScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>GROWTH AND INSPIRATION</Text>
        <Text style={styles.title}>Every Journey Matters</Text>
        <Text style={styles.description}>
          Learning is a journey made of small steps, new knowledge and a growing understanding of animals.
        </Text>

        {stories.map((story, index) => (
          <View key={story.name} style={styles.card}>
            <Text style={styles.quoteMark}>“</Text>
            <Text style={styles.storyText}>{story.text}</Text>
            <View style={styles.line} />
            <Text style={styles.storyName}>{story.name}</Text>
            <Text style={styles.role}>{story.role}</Text>
          </View>
        ))}

        <Text style={styles.disclaimer}>
          These examples are illustrative and are not real customer testimonials.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/programs' as any)}>
          <Text style={styles.buttonText}>Find Your Program</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav onHome={() => router.push('/' as any)} onCourses={() => router.push('/programs' as any)} onContact={() => router.push('/contact' as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#2A9D78', fontSize: 11, fontWeight: '800', marginTop: 10 },
  title: { color: '#173B4A', fontSize: 30, lineHeight: 36, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginVertical: 15 },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 18, marginTop: 14 },
  quoteMark: { color: '#F47732', fontSize: 42, fontWeight: '800', height: 42 },
  storyText: { color: '#4C5A5E', fontSize: 14, lineHeight: 22 },
  line: { height: 2, backgroundColor: '#DCEFE4', marginVertical: 16 },
  storyName: { color: '#173B4A', fontWeight: '800', fontSize: 15 },
  role: { color: '#2A9D78', fontSize: 11, marginTop: 5 },
  disclaimer: { color: '#7A8588', fontSize: 11, lineHeight: 17, marginTop: 16 },
  button: { backgroundColor: '#F47732', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 22 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
});