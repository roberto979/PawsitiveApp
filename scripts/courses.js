import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Header from '../.expo/components/Header';

export default function CoursesScreen() {
  const coursesList = [
    { id: '05', title: 'Basic Canine Education' },
    { id: '07', title: 'Feline Behaviorism' },
    { id: '08', title: 'Puppy Socialization' },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Courses</Text>
        <FlatList
          data={coursesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => router.push({ pathname: '/informacoes', params: { id: item.id, name: item.title } })}
            >
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemSub}>View Details ➜</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { flex: 1, paddingHorizontal: 16, paddingTop: 20 },
  title: { fontSize: 31, fontWeight: '800', color: '#173B4A', marginBottom: 20 },
  item: { backgroundColor: '#2A9D78', padding: 18, borderRadius: 15, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  itemSub: { color: '#FFF', fontSize: 12, opacity: 0.8 }
});