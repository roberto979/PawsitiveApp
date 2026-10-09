
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const steps = [
  { number: '01', title: 'Learn the Fundamentals', text: 'Understand animal behaviour, wellbeing and safe handling.' },
  { number: '02', title: 'Practise Your Skills', text: 'Apply what you learn through guided activities and realistic examples.' },
  { number: '03', title: 'Build Confidence', text: 'Reflect on your progress and continue improving your approach.' },
];

export default function ExperienceScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>LEARNING IN ACTION</Text>
        <Text style={styles.title}>Gain Practical Experience</Text>
        <Text style={styles.description}>
          Understanding animals involves more than theory. Practical learning helps you build confidence and develop responsible care habits.
        </Text>

        <View style={styles.hero}>
          <Text style={styles.heroIcon}>🐕 🐈</Text>
          <Text style={styles.heroTitle}>Knowledge Meets Practice</Text>
          <Text style={styles.heroText}>Learn step by step in a way that puts animal wellbeing first.</Text>
        </View>

        {steps.map((step) => (
          <View key={step.number} style={styles.step}>
            <View style={styles.numberCircle}>
              <Text style={styles.number}>{step.number}</Text>
            </View>
            <View style={styles.stepBody}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepText}>{step.text}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => router.push('/journey' as any)}>
          <Text style={styles.buttonText}>Start Your Journey</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => router.push('/stories' as any)}>
          <Text style={styles.linkText}>Read Success Stories →</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav onHome={() => router.push('/')} onCourses={() => router.push('/course')} onContact={() => router.push('/contact')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#2A9D78', fontSize: 11, fontWeight: '800', marginTop: 10 },
  title: { color: '#173B4A', fontSize: 30, lineHeight: 36, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginVertical: 15 },
  hero: { backgroundColor: '#DCEFE4', borderRadius: 20, padding: 22, alignItems: 'center', marginVertical: 12 },
  heroIcon: { fontSize: 38, marginBottom: 12 },
  heroTitle: { color: '#173B4A', fontSize: 19, fontWeight: '800', textAlign: 'center' },
  heroText: { color: '#4C5A5E', textAlign: 'center', lineHeight: 21, marginTop: 8 },
  step: { flexDirection: 'row', marginTop: 22, alignItems: 'flex-start' },
  numberCircle: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#2A9D78', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  number: { color: '#FFFFFF', fontWeight: '800' },
  stepBody: { flex: 1 },
  stepTitle: { color: '#173B4A', fontSize: 16, fontWeight: '800', marginBottom: 5 },
  stepText: { color: '#4C5A5E', lineHeight: 20, fontSize: 13 },
  button: { backgroundColor: '#F47732', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 26 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  link: { padding: 15, alignItems: 'center' },
  linkText: { color: '#173B4A', fontWeight: '700' },
});