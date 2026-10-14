export const school = {
  name: "EAK International School",
  tagline: "Learn boldly. Grow kindly.",
  established: 1999,
  students: 1800,
  educators: 90,
  passRate: 100,
  phone: "+91 80 5550 0123",
  email: "hello@eakschool.example",
  address: "18 Learning Avenue, Whitefield, Bengaluru 560066",
  hours: "Monday–Saturday, 8:30 am–4:30 pm",
  principal: "Dr. Meera Srinivasan",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events & Notices", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export type AcademicStage = {
  name: string;
  grades: string;
  ages: string;
  summary: string;
  description: string;
  subjects: string[];
  highlights: string[];
};
export const stages: AcademicStage[] = [
  {
    name: "Primary",
    grades: "Grades I–V",
    ages: "Ages 6–10",
    summary: "Big discoveries. Small beginnings.",
    description:
      "A joyful foundation in reading, numbers and the world around us. Children learn through stories, experiments and hands-on play.",
    subjects: [
      "English",
      "Mathematics",
      "Environmental Studies",
      "Hindi",
      "Art & Music",
    ],
    highlights: [
      "Daily reading circles",
      "Learning through play",
      "Individual learning support",
    ],
  },
  {
    name: "Middle",
    grades: "Grades VI–VIII",
    ages: "Ages 11–13",
    summary: "Finding their voice. Following their curiosity.",
    description:
      "Independent thinking takes root through subject exploration, collaborative projects and a supportive mentoring programme.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Hindi",
      "Computing",
    ],
    highlights: [
      "Interdisciplinary projects",
      "Clubs and leadership",
      "STEM exploration",
    ],
  },
  {
    name: "Secondary",
    grades: "Grades IX–X",
    ages: "Ages 14–15",
    summary: "Strong foundations for what comes next.",
    description:
      "A balanced CBSE-aligned programme builds subject mastery, purposeful study habits and confidence for board examinations.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Hindi",
      "Information Technology",
    ],
    highlights: [
      "Structured exam preparation",
      "One-to-one mentoring",
      "Career discovery workshops",
    ],
  },
  {
    name: "Senior Secondary",
    grades: "Grades XI–XII",
    ages: "Ages 16–17",
    summary: "Their ambitions. A world of possibilities.",
    description:
      "Science, Commerce and Humanities pathways help students connect their strengths to meaningful choices beyond school.",
    subjects: [
      "Science: Physics, Chemistry, Mathematics / Biology",
      "Commerce: Accountancy, Business Studies, Economics",
      "Humanities: History, Political Science, Psychology",
      "English Core",
    ],
    highlights: [
      "University guidance",
      "Research and internships",
      "Small-group subject coaching",
    ],
  },
];

export type Facility = {
  id: string;
  name: string;
  category: "Academic" | "Sports" | "Student Life" | "Support";
  image: string;
  alt: string;
  description: string;
  detail: string;
};
export const facilities: Facility[] = [
  {
    id: "classrooms",
    name: "Spaces that spark ideas",
    category: "Academic",
    image: "/images/learning-space.webp",
    alt: "Students collaborating with their teacher in a bright classroom",
    description: "Light-filled classrooms where questions are always welcome.",
    detail: "Interactive learning tools · Small learning groups",
  },
  {
    id: "library",
    name: "A world between the pages",
    category: "Academic",
    image: "/images/library.jpg",
    alt: "Library shelves filled with books",
    description:
      "Quiet reading corners, a rich collection and room to get lost in a good story.",
    detail: "12,000+ titles · Dedicated reading programme",
  },
  {
    id: "science",
    name: "Curiosity, put to the test",
    category: "Academic",
    image: "/images/science.jpg",
    alt: "Hands-on laboratory experiment",
    description:
      "Supervised science and maker sessions turn classroom concepts into discoveries.",
    detail: "Physics, chemistry & biology · Maker club",
  },
  {
    id: "sports",
    name: "Room to play. Space to grow.",
    category: "Sports",
    image: "/images/sports.jpg",
    alt: "Outdoor basketball court with colourful playing surfaces",
    description:
      "Teamwork, resilience and healthy habits, on the field and beyond.",
    detail: "Basketball · Football · Athletics · Indoor games",
  },
  {
    id: "arts",
    name: "Let their imagination lead",
    category: "Student Life",
    image: "/images/art.jpg",
    alt: "Colourful art materials ready for a creative lesson",
    description:
      "Welcoming spaces for art, music, theatre and creative expression.",
    detail: "Visual arts studio · Music & performance",
  },
  {
    id: "campus",
    name: "A little closer to nature",
    category: "Student Life",
    image: "/images/campus.jpg",
    alt: "Leafy campus buildings with open green spaces",
    description:
      "A green campus with open spaces to reflect, connect and recharge.",
    detail: "8-acre campus · Outdoor learning",
  },
  {
    id: "transport",
    name: "A reassuring journey",
    category: "Support",
    image: "/images/transport.jpg",
    alt: "School bus parked outside",
    description:
      "Supervised transport, trained attendants and clear communication with families.",
    detail: "GPS-enabled routes · Trained attendants",
  },
  {
    id: "wellbeing",
    name: "Care comes first",
    category: "Support",
    image: "/images/classroom.jpg",
    alt: "School learning environment",
    description:
      "A medical room, student counsellor and caring adults who know every child.",
    detail: "First-aid team · Student counselling",
  },
];

export type SchoolEvent = {
  id: number;
  title: string;
  date: string;
  category:
    | "Circulars"
    | "Exam Notices"
    | "Holidays"
    | "Announcements"
    | "Events"
    | "Competitions";
  description: string;
  location?: string;
  time?: string;
  image?: string;
};
export const events: SchoolEvent[] = [
  {
    id: 1,
    title: "Come see curiosity in action",
    date: "2026-11-14",
    category: "Events",
    description:
      "Meet our educators, explore the campus and experience a day at EAK at our family open house.",
    location: "School campus",
    time: "9:00 am–12:00 pm",
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    title: "Admissions for 2027–28 are open",
    date: "2026-10-01",
    category: "Announcements",
    description:
      "Applications are welcome for Grades I–IX and XI. Explore our admissions guide and meet the team.",
  },
  {
    id: 3,
    title: "Young minds. Remarkable ideas.",
    date: "2026-11-21",
    category: "Competitions",
    description:
      "Our annual science showcase celebrates student-led experiments and inventive solutions.",
    location: "Innovation lab",
    time: "10:00 am–2:00 pm",
    image: "/images/science.jpg",
  },
  {
    id: 4,
    title: "Term II assessment schedule",
    date: "2026-10-16",
    category: "Exam Notices",
    description:
      "View the assessment timetable for Grades VI–X and preparation guidance.",
  },
  {
    id: 5,
    title: "A celebration of every talent",
    date: "2026-12-12",
    category: "Events",
    description:
      "Music, theatre and stories come together for our annual school celebration.",
    location: "School auditorium",
    time: "4:00 pm–7:00 pm",
    image: "/images/art.jpg",
  },
  {
    id: 6,
    title: "Winter break information",
    date: "2026-12-20",
    category: "Holidays",
    description:
      "The school closes from 24 December to 3 January. Classes resume on 4 January 2027.",
  },
  {
    id: 7,
    title: "Parent–educator conversations",
    date: "2026-10-24",
    category: "Circulars",
    description:
      "A chance to reflect on progress together and discuss your child's next learning goals.",
  },
  {
    id: 8,
    title: "Together, we go further",
    date: "2027-01-16",
    category: "Events",
    description:
      "Join us for sports day, celebrating effort, teamwork and the joy of taking part.",
    location: "Sports ground",
    time: "8:30 am–1:00 pm",
    image: "/images/sports.jpg",
  },
  {
    id: 9,
    title: "Reading week: a story for everyone",
    date: "2026-11-02",
    category: "Announcements",
    description:
      "Author conversations, book swaps and reading circles for every grade.",
  },
  {
    id: 10,
    title: "Inter-school debate invitation",
    date: "2027-01-23",
    category: "Competitions",
    description:
      "Our senior students host a day of thoughtful discussion and confident public speaking.",
    location: "School auditorium",
    time: "10:00 am–1:00 pm",
  },
];
export const categories = [
  "All",
  "Circulars",
  "Exam Notices",
  "Holidays",
  "Announcements",
  "Events",
  "Competitions",
] as const;
export const faqs = [
  {
    question: "Which grades are open for admission?",
    answer:
      "Our 2027–28 intake includes Grades I–IX and XI, subject to available places. The school offers education from Grade I through Grade XII.",
  },
  {
    question: "Can we visit the campus before applying?",
    answer:
      "A campus visit is a good way to meet educators and see learning in action. Please contact the admissions office for visit information. The Contact enquiry does not book a visit.",
  },
  {
    question: "What is the age requirement for Grade I?",
    answer: "Children should be six years of age by 31 March 2027 for Grade I.",
  },
  {
    question: "Is there an entrance assessment?",
    answer:
      "For Primary, we arrange a friendly interaction with the child and family. Older applicants take an age-appropriate learning assessment to help us understand their strengths and support needs.",
  },
  {
    question: "Do you offer transport?",
    answer:
      "Our transport programme covers selected neighbourhoods around Whitefield, with GPS-enabled buses and trained attendants. Route availability would be confirmed during admission.",
  },
  {
    question: "Are scholarships or sibling benefits available?",
    answer:
      "Merit scholarships support eligible senior students, and a 10% tuition concession applies to the younger sibling. Contact admissions for criteria.",
  },
  {
    question: "How do I start an enquiry?",
    answer:
      "Explore the steps and dates here, then open Contact to complete the enquiry checklist. Entries are checked in your browser only; nothing is sent or saved.",
  },
];
export const aboutFaqs = [
  {
    question: "What is the student-to-teacher ratio at EAK?",
    answer:
      "Our student-to-teacher ratio is 1:20, helping educators know each learner and offer individual guidance.",
  },
  {
    question: "Does the school provide transport?",
    answer:
      "School transport serves selected neighbourhoods around Whitefield. Routes have GPS-enabled buses and trained attendants; the office can discuss availability for your area.",
  },
  {
    question: "Can students transfer from another curriculum?",
    answer:
      "Yes. A conversation and age-appropriate learning interaction help us understand each child's previous learning and plan their transition into our CBSE-aligned programme.",
  },
  {
    question: "How are students learning in English supported?",
    answer:
      "Reading circles, small-group support and regular conversations with teachers help students build confidence and make steady progress.",
  },
  {
    question: "What support is available for student wellbeing?",
    answer:
      "A student counsellor, first-aid team and mentoring relationships help children feel known, safe and supported at school.",
  },
  {
    question: "Can our family explore the campus before applying?",
    answer:
      "You can browse the photo tour on the Facilities page and contact the school office about a campus visit.",
  },
];
export const testimonials = [
  {
    quote:
      "Our daughter comes home with a new question every day. That joy of learning is what we hoped a school would give her.",
    name: "Ananya Rao",
    relation: "Parent · Grade IV",
    initials: "AR",
  },
  {
    quote:
      "The teachers see the individual, not just the report card. Our son has found confidence, friends and a love for science.",
    name: "Vikram Menon",
    relation: "Parent · Grade VIII",
    initials: "VM",
  },
  {
    quote:
      "From the debate club to the science lab, I have had the space to discover what I love and the support to keep trying.",
    name: "Ishaan Kapoor",
    relation: "Student · Grade XI",
    initials: "IK",
  },
];
export function formatDate(
  date: string,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  },
) {
  return new Intl.DateTimeFormat("en-IN", {
    ...options,
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
