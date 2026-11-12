
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
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; message?: string }>({});

  function validateForm() {
    const newErrors: { name?: string; phone?: string; email?: string; message?: string } = {};

    if (!name.trim()) newErrors.name = 'Please enter your full name.';

    // Normalização e Validação de Telefone (Idêntica à Web)
    const cleanedPhone = phone.replace(/[\s\-()\+]/g, '');
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phone.trim() || !phoneRegex.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 082 123 4567 or +27 82 123 4567).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message.trim()) newErrors.message = 'Please enter your inquiry message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function sendMessage() {
    if (!validateForm()) return;

    Alert.alert(
      'Inquiry Submitted',
      'Thank you for contacting Pawsitive Pet Academy! Our Durban team will respond shortly.'
    );
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>WE ARE HERE TO HELP</Text>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.description}>
          Have a question about our courses or animal care training in Durban? We would love to hear from you.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Durban Campus Details</Text>
          <Text style={styles.info}>✉  Email: info@pawsitiveacademy.co.za</Text>
          <Text style={styles.info}>☎  Phone: +27 31 555 0192</Text>
          <Text style={styles.info}>📍  Location: Durban, KwaZulu-Natal, South Africa</Text>
        </View>

        <Text style={styles.label}>Your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#899397"
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="+27 82 123 4567"
          placeholderTextColor="#899397"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

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
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

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
        {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}

        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Submit Inquiry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/programs' as any)}
        >
          <Text style={styles.secondaryText}>Explore Our Programs & Calculator</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav
        onHome={() => router.push('/')}
        onCourses={() => router.push('/programs' as any)}
        onContact={() => router.push('./contact' as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#268D81', fontWeight: '800', fontSize: 11, marginTop: 10 },
  title: { color: '#285062', fontSize: 32, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginTop: 10, marginBottom: 22 },
  infoCard: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 18, marginBottom: 24, borderWidth: 1, borderColor: '#E6ECEF' },
  cardTitle: { color: '#285062', fontSize: 19, fontWeight: '800', marginBottom: 12 },
  info: { color: '#4C5A5E', fontSize: 14, marginBottom: 8 },
  label: { color: '#285062', fontSize: 13, fontWeight: '700', marginBottom: 7, marginTop: 9 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DCE2E6', borderRadius: 12, padding: 13, color: '#285062', fontSize: 14 },
  message: { minHeight: 125 },
  errorText: { color: '#D93025', fontSize: 12, marginTop: 4, fontWeight: '600' },
  button: { backgroundColor: '#DA6F43', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 22 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  secondaryButton: { padding: 15, alignItems: 'center' },
  secondaryText: { color: '#285062', fontWeight: '700' },
});