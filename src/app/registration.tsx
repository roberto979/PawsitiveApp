import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function ConfirmationScreen() {
  const { name, course } = useLocalSearchParams<{
    name?: string;
    course?: string;
  }>();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.iconCircle}>
          <Text style={styles.check}>✓</Text>
        </View>

        <Text style={styles.eyebrow}>THANK YOU FOR YOUR INTEREST</Text>
        <Text style={styles.title}>You're Taking a Positive Step!</Text>
        <Text style={styles.description}>
          Thank you{name ? `, ${name}` : ''}. Your registration details have been received by this demo screen.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your selected program</Text>
          <Text style={styles.courseName}>{course || 'Your chosen program'}</Text>
          <Text style={styles.cardText}>
            You can return to the programs page to explore other learning options.
          </Text>
        </View>

        <Text style={styles.notice}>
          This is a prototype confirmation. Your details are not being sent to a server or saved to a real registration system.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/programs' as any)}>
          <Text style={styles.buttonText}>Explore More Programs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/' as any)}>
          <Text style={styles.secondaryText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav onHome={() => router.push('/' as any)} onCourses={() => router.push('/programs' as any)} onContact={() => router.push('/contact' as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 22, paddingBottom: 35, alignItems: 'center' },
  iconCircle: { backgroundColor: '#DCEFE4', width: 82, height: 82, borderRadius: 41, alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 24 },
  check: { color: '#2A9D78', fontSize: 42, fontWeight: '800' },
  eyebrow: { color: '#2A9D78', fontSize: 11, fontWeight: '800', textAlign: 'center' },
  title: { color: '#173B4A', fontSize: 30, fontWeight: '800', textAlign: 'center', marginTop: 12 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, textAlign: 'center', marginTop: 12 },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 18, width: '100%', marginTop: 25 },
  cardTitle: { color: '#4C5A5E', fontSize: 12, fontWeight: '700' },
  courseName: { color: '#173B4A', fontSize: 19, fontWeight: '800', marginTop: 8 },
  cardText: { color: '#4C5A5E', fontSize: 13, lineHeight: 20, marginTop: 10 },
  notice: { color: '#7A8588', fontSize: 11, lineHeight: 17, textAlign: 'center', marginTop: 18 },
  button: { backgroundColor: '#F47732', padding: 16, borderRadius: 14, alignItems: 'center', width: '100%', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  secondaryButton: { padding: 16, alignItems: 'center' },
  secondaryText: { color: '#173B4A', fontWeight: '700' },
});