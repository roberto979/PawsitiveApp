
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function JourneyScreen() {
  const params = useLocalSearchParams<{ course?: string }>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(String(params.course ?? ''));

  function register() {
    if (!name.trim() || !email.trim() || !selectedCourse.trim()) {
      Alert.alert('Missing information', 'Please enter your name, email and preferred program.');
      return;
    }

    router.push({
      pathname: '/registration' as any,
      params: { name, course: selectedCourse },
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>YOUR NEXT CHAPTER</Text>
        <Text style={styles.title}>Start Your Journey</Text>
        <Text style={styles.description}>Take the first step towards better understanding and caring for animals.</Text>

        <Text style={styles.label}>Full name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name" value={name} onChangeText={setName} />

        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Program of interest</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Positive Dog Training"
          value={selectedCourse}
          onChangeText={setSelectedCourse}
        />

        <View style={styles.tip}>
          <Text style={styles.tipTitle}>Why learn with Pawsitive?</Text>
          <Text style={styles.tipText}>Build practical knowledge, grow your confidence and support animal wellbeing.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Submit Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/programs' as any)}>
          <Text style={styles.backText}>Explore Programs First</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav
        onHome={() => router.push('/' as any   )}
        onCourses={() => router.push('/programs'as any)}
        onContact={() => router.push('/contact' as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#2A9D78', fontWeight: '800', fontSize: 11, marginTop: 10 },
  title: { color: '#173B4A', fontSize: 30, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginTop: 10, marginBottom: 20 },
  label: { color: '#173B4A', fontWeight: '700', marginTop: 12, marginBottom: 7 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E5D8', borderRadius: 12, padding: 14, color: '#173B4A' },
  tip: { backgroundColor: '#DCEFE4', padding: 16, borderRadius: 15, marginTop: 24 },
  tipTitle: { color: '#173B4A', fontSize: 16, fontWeight: '800', marginBottom: 7 },
  tipText: { color: '#4C5A5E', lineHeight: 20 },
  button: { backgroundColor: '#F47732', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  backButton: { alignItems: 'center', padding: 15 },
  backText: { color: '#173B4A', fontWeight: '700' },
});