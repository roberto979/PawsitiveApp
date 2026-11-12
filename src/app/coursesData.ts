export interface Course {
  id: string;
  title: string;
  category: 'Professional Program' | 'Practical Course';
  duration: string;
  fee: number;
  description: string;
  topics: string[];
}

export const COURSES_DATA: Course[] = [
  {
    id: 'c1',
    title: 'Canine Obedience Training',
    category: 'Professional Program',
    duration: '12 Weeks',
    fee: 1500,
    description: 'Master foundational commands, leash training, behaviour correction, and positive reinforcement.',
    topics: ['Foundational commands', 'Leash training', 'Behaviour correction', 'Positive reinforcement'],
  },
  {
    id: 'c2',
    title: 'Pet Grooming',
    category: 'Professional Program',
    duration: '12 Weeks',
    fee: 1500,
    description: 'Learn coat care, bathing, de-matting, nail clipping, and sanitary equipment handling.',
    topics: ['Coat care & bathing', 'De-matting techniques', 'Nail clipping', 'Sanitary equipment handling'],
  },
  {
    id: 'c3',
    title: 'Animal Behaviour',
    category: 'Professional Program',
    duration: '12 Weeks',
    fee: 1500,
    description: 'Explore animal psychology, stress management, body language interpretation, and ethical modification plans.',
    topics: ['Animal psychology', 'Stress management', 'Body language interpretation', 'Ethical modification plans'],
  },
  {
    id: 'c4',
    title: 'Pet Business Management',
    category: 'Professional Program',
    duration: '12 Weeks',
    fee: 1500,
    description: 'Build skills in customer service, marketing, financial bookkeeping, and South African legal compliance.',
    topics: ['Customer service', 'Pet industry marketing', 'Financial bookkeeping', 'SA legal compliance'],
  },
  {
    id: 'c5',
    title: 'Puppy Care',
    category: 'Practical Course',
    duration: '6 Weeks',
    fee: 750,
    description: 'Essential early nutrition, vaccination schedules, toilet training, and socialisation windows.',
    topics: ['Early nutrition', 'Vaccination schedules', 'Toilet training', 'Socialisation windows'],
  },
  {
    id: 'c6',
    title: 'Pet First Aid',
    category: 'Practical Course',
    duration: '6 Weeks',
    fee: 750,
    description: 'Emergency wound dressing, CPR basics, poison awareness, and heatstroke stabilization.',
    topics: ['Wound dressing', 'CPR basics', 'Poison awareness', 'Heatstroke stabilization'],
  },
  {
    id: 'c7',
    title: 'Basic Dog Walking',
    category: 'Practical Course',
    duration: '6 Weeks',
    fee: 750,
    description: 'Safe leash management, group walking etiquette, and outdoor hazard de-escalation.',
    topics: ['Safe leash management', 'Group walking etiquette', 'Hazard de-escalation', 'Client handover routines'],
  },
];