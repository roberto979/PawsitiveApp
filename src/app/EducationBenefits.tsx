
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const benefits = [
  { icon: '🐾', title: 'Practical Learning', text: 'Build knowledge through activities inspired by real animal care situations.' },
  { icon: '💚', title: 'Positive Methods', text: 'Learn to encourage trust, confidence and responsible animal handling.' },
  { icon: '🎓', title: 'Personal Growth', text: 'Develop skills and confidence that can support your future goals.' },
  { icon: '🤝', title: 'Animal Wellbeing', text: 'Understand the importance of patience, safety and compassionate care.' },
];

export default function BenefitsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>LEARN WITH PURPOSE</Text>
        <Text style={styles.title}>Education That Makes a Difference</Text>
        <Text style={styles.description}>
          Discover how learning about animals can help you grow your skills and make a positive impact.
        </Text>

        {benefits.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => router.push('/courses' as any)}>
          <Text style={styles.buttonText}>Explore Our Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => router.push('/experience' as any)}>
          <Text style={styles.linkText}>Discover Industry Experience →</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav onHome={() => router.push('/' as any)} onCourses={() => router.push('/courses' as any)} onContact={() => router.push('/contact' as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#2A9D78', fontSize: 11, fontWeight: '800', marginTop: 10 },
  title: { color: '#173B4A', fontSize: 30, lineHeight: 36, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginVertical: 15 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, marginTop: 12 },
  icon: { fontSize: 28, marginBottom: 8 },
  cardTitle: { color: '#173B4A', fontSize: 17, fontWeight: '800', marginBottom: 7 },
  cardText: { color: '#4C5A5E', fontSize: 13, lineHeight: 20 },
  button: { backgroundColor: '#F47732', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  link: { padding: 15, alignItems: 'center' },
  linkText: { color: '#173B4A', fontWeight: '700' },
});