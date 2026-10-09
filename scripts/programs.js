import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Header from '../.expo/entry/Header';
import BottomNav from '../.expo/entry/BottomNav';

export default function ProgramsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Programs</Text>
        <Text style={styles.description}>Choose how you want to start positive learning today.</Text>
        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/courses')}>
          <Text style={styles.cardTitle}>🎓 Available Courses</Text>
          <Text style={styles.cardDesc}>Practical and theoretical lessons to help you evolve.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/professionals')}>
          <Text style={styles.cardTitle}>🐾 Our Professionals</Text>
          <Text style={styles.cardDesc}>Certified specialists ready to assist you.</Text>
        </TouchableOpacity>
      </View>
      <BottomNav
        onHome={() => router.push('/')}
        onCourses={() => router.push('/programs')}
        onContact={() => router.push('/contato')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { flex: 1, paddingHorizontal: 16, paddingTop: 20 },
  title: { fontSize: 31, fontWeight: '800', color: '#173B4A', marginBottom: 10 },
  description: { fontSize: 14, color: '#4C5A5E', marginBottom: 25 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#173B4A', marginBottom: 5 },
  cardDesc: { fontSize: 13, color: '#4C5A5E' },
});