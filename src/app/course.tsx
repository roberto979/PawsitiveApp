import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { COURSES_DATA } from '../app/coursesData';

export default function CourseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const course = COURSES_DATA.find((c) => c.id === String(id)) ?? COURSES_DATA[0];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>{course.category.toUpperCase()}</Text>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.duration}>◷  Duration: {course.duration}  |  Fee: R{course.fee.toLocaleString()}</Text>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.animal}>🐾</Text>
          <Text style={styles.imageText}>Caring for pets. Building confident owners.</Text>
        </View>

        <Text style={styles.sectionTitle}>About this course</Text>
        <Text style={styles.description}>{course.description}</Text>

        <Text style={styles.sectionTitle}>What you will learn</Text>
        {course.topics.map((topic) => (
          <Text key={topic} style={styles.topic}>✓  {topic}</Text>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push({ pathname: '/registration' as any, params: { course: `${course.title} (R${course.fee})` } })}
        >
          <Text style={styles.buttonText}>Enroll / Request Quote</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/programs' as any)} style={styles.backButton}>
          <Text style={styles.backText}>← Back to Programs & Calculator</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav
        onHome={() => router.push('/' as any)}
        onCourses={() => router.push('/programs' as any)}
        onContact={() => router.push('./contact' as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { padding: 20, paddingBottom: 30 },
  eyebrow: { color: '#268D81', fontWeight: '800', fontSize: 11, marginTop: 10 },
  title: { color: '#285062', fontSize: 28, fontWeight: '800', marginTop: 8 },
  duration: { color: '#4C5A5E', fontSize: 14, fontWeight: '700', marginTop: 6 },
  imagePlaceholder: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 24, alignItems: 'center', marginVertical: 18, borderWidth: 1, borderColor: '#E6ECEF' },
  animal: { fontSize: 36 },
  imageText: { color: '#285062', fontWeight: '700', marginTop: 8 },
  sectionTitle: { color: '#285062', fontSize: 18, fontWeight: '800', marginTop: 14, marginBottom: 8 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22 },
  topic: { color: '#4C5A5E', fontSize: 14, marginBottom: 6 },
  button: { backgroundColor: '#DA6F43', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  backButton: { padding: 14, alignItems: 'center' },
  backText: { color: '#285062', fontWeight: '700' },
});