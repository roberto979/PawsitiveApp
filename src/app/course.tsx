
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const courses: Record<string, { title: string; category: string; duration: string; description: string; topics: string[] }> = {
  '1': {
    title: 'Positive Dog Training',
    category: 'Practical Course',
    duration: '6 weeks',
    description: 'Learn how to encourage good behaviour through positive reinforcement and consistent training.',
    topics: ['Understanding dog behaviour', 'Reward-based training', 'Basic commands', 'Building trust and confidence'],
  },
  '2': {
    title: 'Animal Care Essentials',
    category: 'Practical Course',
    duration: '4 weeks',
    description: 'Build your understanding of everyday animal care, safety and wellbeing.',
    topics: ['Daily care routines', 'Nutrition and hydration', 'Hygiene and safety', 'Recognising animal needs'],
  },
  '3': {
    title: 'Professional Pet Care',
    category: 'Professional Program',
    duration: '10 weeks',
    description: 'Develop practical skills for providing responsible, professional pet care.',
    topics: ['Professional care routines', 'Client communication', 'Animal handling', 'Care planning'],
  },
  '4': {
    title: 'Canine Behaviour',
    category: 'Professional Program',
    duration: '12 weeks',
    description: 'Explore canine communication, behaviour and responsible training approaches.',
    topics: ['Canine body language', 'Behaviour observation', 'Training plans', 'Positive behaviour support'],
  },
};

export default function CourseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const course = courses[String(id)] ?? courses['1'];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>{course.category.toUpperCase()}</Text>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.duration}>◷  Duration: {course.duration}</Text>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.animal}>🐾</Text>
          <Text style={styles.imageText}>Learn. Practise. Make a difference.</Text>
        </View>

        <Text style={styles.sectionTitle}>About this course</Text>
        <Text style={styles.description}>{course.description}</Text>

        <Text style={styles.sectionTitle}>What you will learn</Text>
        {course.topics.map((topic) => (
          <Text key={topic} style={styles.topic}>✓  {topic}</Text>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push({ pathname: '/journey' as any, params: { course: course.title } })}
        >
          <Text style={styles.buttonText}>Start Your Journey</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/programs' as any)} style={styles.backButton}>
          <Text style={styles.backText}>← Back to Programs</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav
        onHome={() => router.push('/' as any)}
        onCourses={() => router.push('/programs' as any)}
        onContact={() => router.push('/contact' as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9D9' },
  content: { padding: 20, paddingBottom: 30 },
  eyebrow: { color: '#2A9D78', fontWeight: '800', fontSize: 11, marginTop: 10 },
  title: { color: '#173B4A', fontSize: 30, fontWeight: '800', marginTop: 8 },
  duration: { color: '#4C5A5E', marginTop: 12, marginBottom: 20 },
  imagePlaceholder: { backgroundColor: '#DCEFE4', borderRadius: 22, minHeight: 155, justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
  animal: { fontSize: 44 },
  imageText: { color: '#173B4A', fontWeight: '700', marginTop: 8 },
  sectionTitle: { color: '#173B4A', fontSize: 20, fontWeight: '800', marginTop: 10, marginBottom: 10 },
  description: { color: '#4C5A5E', fontSize: 14, lineHeight: 22, marginBottom: 12 },
  topic: { color: '#4C5A5E', fontSize: 14, marginVertical: 7 },
  button: { backgroundColor: '#F47732', borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  backButton: { alignItems: 'center', padding: 15 },
  backText: { color: '#173B4A', fontWeight: '700' },
});