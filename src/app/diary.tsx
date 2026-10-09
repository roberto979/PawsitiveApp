
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

type DiaryEntry = {
  id: number;
  animal: string;
  care: string;
  notes: string;
};

export default function DiaryScreen() {
  const [animal, setAnimal] = useState('');
  const [care, setCare] = useState('Feeding');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  function addEntry() {
    if (!animal.trim() || !notes.trim()) return;

    setEntries((previous) => [
      { id: Date.now(), animal: animal.trim(), care, notes: notes.trim() },
      ...previous,
    ]);
    setAnimal('');
    setNotes('');
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>CARE WITH CONFIDENCE</Text>
        <Text style={styles.title}>Animal Care Diary</Text>
        <Text style={styles.description}>
          Keep track of daily care activities and make it easier to remember important observations about an animal.
        </Text>

        <View style={styles.formCard}>
          <Text style={styles.sectionTitle}>Add a care entry</Text>

          <Text style={styles.label}>Animal name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Max"
            value={animal}
            onChangeText={setAnimal}
          />

          <Text style={styles.label}>Type of care</Text>
          <View style={styles.options}>
            {['Feeding', 'Exercise', 'Grooming', 'Health', 'Other'].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setCare(item)}
                style={[styles.option, care === item && styles.selectedOption]}
              >
                <Text style={[styles.optionText, care === item && styles.selectedOptionText]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.input, styles.notes]}
            placeholder="Describe the care activity..."
            multiline
            textAlignVertical="top"
            value={notes}
            onChangeText={setNotes}
          />

          <TouchableOpacity style={styles.button} onPress={addEntry}>
            <Text style={styles.buttonText}>Add Entry</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recent Entries</Text>

        {entries.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.paw}>🐾</Text>
            <Text style={styles.emptyTitle}>No entries yet</Text>
            <Text style={styles.emptyText}>Your care records will appear here.</Text>
          </View>
        ) : (
          entries.map((entry) => (
            <View key={entry.id} style={styles.entry}>
              <Text style={styles.entryTitle}>{entry.animal} · {entry.care}</Text>
              <Text style={styles.entryNotes}>{entry.notes}</Text>
            </View>
          ))
        )}

        <TouchableOpacity style={styles.link} onPress={() => router.push('/programs' as any)}>
          <Text style={styles.linkText}>Explore Animal Care Programs →</Text>
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
  title: { color: '#173B4A', fontSize: 30, fontWeight: '800', marginTop: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginVertical: 14 },
  formCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 17, marginVertical: 10 },
  sectionTitle: { color: '#173B4A', fontSize: 19, fontWeight: '800', marginTop: 15, marginBottom: 10 },
  label: { color: '#173B4A', fontSize: 13, fontWeight: '700', marginTop: 12, marginBottom: 7 },
  input: { backgroundColor: '#FFFDF3', borderWidth: 1, borderColor: '#E2E5D8', borderRadius: 12, padding: 12, color: '#173B4A' },
  notes: { minHeight: 95 },
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  option: { borderWidth: 1, borderColor: '#D5DED7', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 9 },
  selectedOption: { backgroundColor: '#2A9D78', borderColor: '#2A9D78' },
  optionText: { color: '#173B4A', fontSize: 12 },
  selectedOptionText: { color: '#FFFFFF', fontWeight: '700' },
  button: { backgroundColor: '#F47732', padding: 15, borderRadius: 13, alignItems: 'center', marginTop: 18 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  empty: { backgroundColor: '#DCEFE4', borderRadius: 16, padding: 22, alignItems: 'center' },
  paw: { fontSize: 32 },
  emptyTitle: { color: '#173B4A', fontWeight: '800', marginTop: 8 },
  emptyText: { color: '#4C5A5E', fontSize: 13, marginTop: 5 },
  entry: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 14, marginTop: 10 },
  entryTitle: { color: '#173B4A', fontWeight: '800', marginBottom: 6 },
  entryNotes: { color: '#4C5A5E', lineHeight: 20 },
  link: { padding: 16, alignItems: 'center' },
  linkText: { color: '#173B4A', fontWeight: '700' },
});