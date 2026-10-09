
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendMessage() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Missing information', 'Please complete all fields.');
      return;
    }

    Alert.alert(
      'Message ready',
      'Thank you for contacting Pawsitive! Your message has been recorded in this demo.'
    );
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>WE ARE HERE TO HELP</Text>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.description}>
          Have a question about our courses or animal care training?
          We would love to hear from you.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Get in touch</Text>
          <Text style={styles.info}>✉  Email: hello@pawsitive.example</Text>
          <Text style={styles.info}>☎  Phone: +27 00 000 0000</Text>
          <Text style={styles.info}>📍  South Africa</Text>
          <Text style={styles.note}>
            Replace these demo contact details with the real Pawsitive details.
          </Text>
        </View>

        <Text style={styles.label}>Your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#899397"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          placeholderTextColor="#899397"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Your message</Text>
        <TextInput
          style={[styles.input, styles.message]}
          placeholder="How can we help?"
          placeholderTextColor="#899397"
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/programs' as any)}
        >
          <Text style={styles.secondaryText}>Explore Our Programs</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav
        onHome={() => router.push('/' )}
        onCourses={() => router.push('/programs' as any)}
        onContact={() => router.push('/contact' as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#2A9D78', fontWeight: '800', fontSize: 11, marginTop: 10 },
  title: { color: '#173B4A', fontSize: 32, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginTop: 10, marginBottom: 22 },
  infoCard: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 18, marginBottom: 24 },
  cardTitle: { color: '#173B4A', fontSize: 19, fontWeight: '800', marginBottom: 12 },
  info: { color: '#4C5A5E', fontSize: 14, marginBottom: 12 },
  note: { color: '#7A8588', fontSize: 11, lineHeight: 16, marginTop: 4 },
  label: { color: '#173B4A', fontSize: 13, fontWeight: '700', marginBottom: 7, marginTop: 9 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E5D8', borderRadius: 12, padding: 13, color: '#173B4A', fontSize: 14 },
  message: { minHeight: 125 },
  button: { backgroundColor: '#F47732', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 22 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  secondaryButton: { padding: 15, alignItems: 'center' },
  secondaryText: { color: '#173B4A', fontWeight: '700' },
});