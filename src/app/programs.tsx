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
import { COURSES_DATA } from '../app/coursesData';

const COLORS = {
  background: '#f8f9fa', // Cream
  navy: '#285062',       // Navy
  teal: '#268D81',       // Teal
  terracotta: '#DA6F43', // Terracotta
  white: '#FFFFFF',
  gray: '#4C5A5E',
};

export default function ProgramsScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredPrograms = COURSES_DATA.filter((program) => {
    const matchesSearch = program.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || program.category === category;
    return matchesSearch && matchesCategory;
  });

  function toggleCourse(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  // Lógica de Cálculo (Idêntica ao JS/script.js da Web)
  const selectedCourses = COURSES_DATA.filter((c) => selectedIds.includes(c.id));
  const subtotal = selectedCourses.reduce((sum, item) => sum + item.fee, 0);

  let discountPercent = 0;
  if (selectedCourses.length === 2) discountPercent = 5;
  else if (selectedCourses.length === 3) discountPercent = 10;
  else if (selectedCourses.length >= 4) discountPercent = 15;

  const discountAmount = subtotal * (discountPercent / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const vat = discountedSubtotal * 0.15;
  const total = discountedSubtotal + vat;

  function handleProceedToRegistration() {
    if (selectedCourses.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course to generate a quote.');
      return;
    }
    const courseNames = selectedCourses.map((c) => c.title).join(', ');
    router.push({
      pathname: '/registration' as any,
      params: { course: `${courseNames} (Total: R${total.toFixed(2)})` },
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>LEARN WITH PAWSITIVE</Text>
        <Text style={styles.title}>Courses & Fee Calculator</Text>
        <Text style={styles.description}>
          Browse our 12-week Professional Programmes (R1,500) and 6-week Practical Short Courses (R750). Tap "+ Quote" to calculate multi-course discounts.
        </Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search programs..."
          placeholderTextColor="#777777"
          style={styles.search}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
          {['All', 'Professional Program', 'Practical Course'].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setCategory(item)}
              style={[styles.filterChip, category === item && styles.filterChipActive]}
            >
              <Text style={[styles.filterText, category === item && styles.filterTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {filteredPrograms.map((program) => {
          const isSelected = selectedIds.includes(program.id);
          return (
            <View key={program.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardCategory}>{program.category.toUpperCase()}</Text>
                <Text style={styles.cardPrice}>R{program.fee.toLocaleString()}</Text>
              </View>
              <Text style={styles.cardTitle}>{program.title}</Text>
              <Text style={styles.cardDuration}>◷ {program.duration}</Text>
              <Text style={styles.cardDesc}>{program.description}</Text>

              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={styles.detailsBtn}
                  onPress={() => router.push({ pathname: '/course' as any, params: { id: program.id } })}
                >
                  <Text style={styles.detailsBtnText}>View Syllabus</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.quoteBtn, isSelected && styles.quoteBtnSelected]}
                  onPress={() => toggleCourse(program.id)}
                >
                  <Text style={styles.quoteBtnText}>
                    {isSelected ? '✓ Added to Quote' : '+ Add to Quote'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* Calculadora de Orçamentos */}
        <View style={styles.calculatorBox}>
          <Text style={styles.calcTitle}>Instant Fee Estimator</Text>
          <Text style={styles.calcSubtitle}>
            Selected Courses: {selectedCourses.length} ({discountPercent}% Multi-Course Discount)
          </Text>

          <View style={styles.calcRow}>
            <Text style={styles.calcLabel}>Subtotal:</Text>
            <Text style={styles.calcValue}>R{subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.calcRow}>
            <Text style={styles.calcLabel}>Discount ({discountPercent}%):</Text>
            <Text style={[styles.calcValue, { color: COLORS.teal }]}>-R{discountAmount.toFixed(2)}</Text>
          </View>
          <View style={styles.calcRow}>
            <Text style={styles.calcLabel}>VAT (15%):</Text>
            <Text style={styles.calcValue}>R{vat.toFixed(2)}</Text>
          </View>
          <View style={[styles.calcRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total (Incl. VAT):</Text>
            <Text style={styles.totalValue}>R{total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleProceedToRegistration}>
            <Text style={styles.submitButtonText}>Request Quotation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNav
        onHome={() => router.push('/')}
        onCourses={() => router.push('/programs' as any)}
        onContact={() => router.push('/contact' as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 20, paddingBottom: 40 },
  eyebrow: { color: COLORS.teal, fontWeight: '800', fontSize: 11, marginTop: 10 },
  title: { color: COLORS.navy, fontSize: 28, fontWeight: '800', marginTop: 6 },
  description: { color: COLORS.gray, fontSize: 14, lineHeight: 20, marginVertical: 12 },
  search: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: '#DCE2E6', borderRadius: 12, padding: 12, color: COLORS.navy, marginBottom: 12 },
  filters: { gap: 8, marginBottom: 16 },
  filterChip: { borderWidth: 1, borderColor: COLORS.navy, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8 },
  filterChipActive: { backgroundColor: COLORS.navy },
  filterText: { color: COLORS.navy, fontSize: 12, fontWeight: '700' },
  filterTextActive: { color: COLORS.white },
  card: { backgroundColor: COLORS.white, borderRadius: 16, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: '#E6ECEF' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardCategory: { color: COLORS.teal, fontSize: 10, fontWeight: '800' },
  cardPrice: { color: COLORS.navy, fontSize: 16, fontWeight: '800' },
  cardTitle: { color: COLORS.navy, fontSize: 18, fontWeight: '800', marginTop: 4 },
  cardDuration: { color: COLORS.gray, fontSize: 12, marginTop: 2, marginBottom: 8 },
  cardDesc: { color: COLORS.gray, fontSize: 13, lineHeight: 19, marginBottom: 12 },
  cardActions: { flexDirection: 'row', gap: 10 },
  detailsBtn: { flex: 1, borderWidth: 1, borderColor: COLORS.navy, borderRadius: 10, paddingVertical: 10, alignItems: 'center' },
  detailsBtnText: { color: COLORS.navy, fontWeight: '700', fontSize: 12 },
  quoteBtn: { flex: 1, backgroundColor: COLORS.teal, borderRadius: 10, paddingVertical: 10, alignItems: 'center' },
  quoteBtnSelected: { backgroundColor: COLORS.navy },
  quoteBtnText: { color: COLORS.white, fontWeight: '700', fontSize: 12 },
  calculatorBox: { backgroundColor: COLORS.white, borderRadius: 18, padding: 18, marginTop: 10, borderWidth: 2, borderColor: COLORS.navy },
  calcTitle: { color: COLORS.navy, fontSize: 20, fontWeight: '800' },
  calcSubtitle: { color: COLORS.gray, fontSize: 12, marginTop: 4, marginBottom: 14 },
  calcRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  calcLabel: { color: COLORS.gray, fontSize: 14 },
  calcValue: { color: COLORS.navy, fontSize: 14, fontWeight: '700' },
  totalRow: { borderTopWidth: 1, borderTopColor: '#E6ECEF', paddingTop: 10, marginTop: 6 },
  totalLabel: { color: COLORS.navy, fontSize: 16, fontWeight: '800' },
  totalValue: { color: COLORS.terracotta, fontSize: 18, fontWeight: '800' },
  submitButton: { backgroundColor: COLORS.terracotta, padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 16 },
  submitButtonText: { color: COLORS.white, fontWeight: '800', fontSize: 15 },
});