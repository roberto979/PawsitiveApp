import { useState } from 'react';
import {
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

const COLORS = {
  background: '#FFF9D9',
  navy: '#173B4A',
  green: '#2A9D78',
  orange: '#F47732',
  white: '#FFFFFF',
  gray: '#4C5A5E',
};

const programs = [
  {
    id: '1',
    title: 'Positive Dog Training',
    category: 'Practical Course',
    description:
      'Learn positive reinforcement and everyday dog training techniques.',
    duration: '4 weeks',
  },
  {
    id: '2',
    title: 'Animal Care Essentials',
    category: 'Practical Course',
    description:
      'Discover responsible animal handling, welfare and daily care.',
    duration: '3 weeks',
  },
  {
    id: '3',
    title: 'Professional Pet Care',
    category: 'Professional Program',
    description:
      'Develop practical skills for a future in the animal care industry.',
    duration: '8 weeks',
  },
  {
    id: '4',
    title: 'Canine Behaviour',
    category: 'Professional Program',
    description:
      'Understand canine behaviour and positive training methods.',
    duration: '6 weeks',
  },
];

export default function ProgramsScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' || program.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.eyebrow}>LEARN WITH PAWSITIVE</Text>

        <Text style={styles.title}>Our Programs</Text>

        <Text style={styles.description}>
          Training for every stage of your journey.
          Discover practical courses and professional
          learning opportunities.
        </Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search programs..."
          placeholderTextColor="#777777"
          style={styles.search}
          accessibilityLabel="Search programs"
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {['All', 'Practical Course', 'Professional Program'].map(
            (item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.filterButton,
                  category === item && styles.activeFilter,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    category === item && styles.activeFilterText,
                  ]}
                >
                  {item === 'All'
                    ? 'All Programs'
                    : item === 'Practical Course'
                    ? 'Practical'
                    : 'Professional'}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>

        <Text style={styles.results}>
          {filteredPrograms.length} programs available
        </Text>

        {filteredPrograms.map((program) => (
          <View key={program.id} style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.dogEmoji}>🐕</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.category}>
                {program.category.toUpperCase()}
              </Text>

              <Text style={styles.cardTitle}>
                {program.title}
              </Text>

              <Text style={styles.cardDescription}>
                {program.description}
              </Text>

              <Text style={styles.duration}>
                Duration: {program.duration}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  router.push({
                    pathname: '/course' as any,
                    params: { id: program.id },
                  })
                }
              >
                <Text style={styles.buttonText}>
                  View Program →
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {filteredPrograms.length === 0 && (
          <Text style={styles.empty}>
            No programs found. Try another search.
          </Text>
        )}
      </ScrollView>

      <BottomNav
        onHome={() => router.push('/')}
        onCourses={() => router.push('/programs')}
        onContact={() => router.push('/contact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 30,
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: '700',
    color: COLORS.green,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '800',
    color: COLORS.navy,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.gray,
    marginBottom: 20,
  },
  search: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E5DFC5',
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: COLORS.navy,
  },
  filters: {
    gap: 8,
    paddingVertical: 16,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: COLORS.navy,
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  filterText: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: '600',
  },
  activeFilterText: {
    color: COLORS.white,
  },
  results: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#EEE8D1',
  },
  imagePlaceholder: {
    height: 145,
    backgroundColor: '#E6F1E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dogEmoji: {
    fontSize: 65,
  },
  cardBody: {
    padding: 16,
  },
  category: {
    color: COLORS.green,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 7,
  },
  cardTitle: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  cardDescription: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 12,
  },
  duration: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.orange,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
  },
  empty: {
    textAlign: 'center',
    color: COLORS.gray,
    paddingVertical: 30,
  },
});