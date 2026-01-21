export type OpportunityType = 'scholarship' | 'internship' | 'summit' | 'competition';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  description: string;
  deadline: string;
  location: string;
  amount?: string;
  url: string;
  tags: string[];
}

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Gates Millennium Scholars Program',
    organization: 'Bill & Melinda Gates Foundation',
    type: 'scholarship',
    description: 'Full scholarship for outstanding minority students with significant financial need to pursue undergraduate studies.',
    deadline: '2024-09-15',
    location: 'United States',
    amount: 'Full Tuition',
    url: 'https://gmsp.org',
    tags: ['undergraduate', 'full-ride', 'minority'],
  },
  {
    id: '2',
    title: 'Google STEP Internship',
    organization: 'Google',
    type: 'internship',
    description: 'A developmental internship for first and second-year undergraduate students with a passion for computer science.',
    deadline: '2024-10-30',
    location: 'Mountain View, CA',
    amount: '$8,000/month',
    url: 'https://careers.google.com/students/',
    tags: ['tech', 'undergraduate', 'paid'],
  },
  {
    id: '3',
    title: 'One Young World Summit 2024',
    organization: 'One Young World',
    type: 'summit',
    description: 'Global forum for young leaders to connect and develop solutions for pressing global issues.',
    deadline: '2024-08-01',
    location: 'Montreal, Canada',
    url: 'https://oneyoungworld.com',
    tags: ['leadership', 'global', 'networking'],
  },
  {
    id: '4',
    title: 'Hult Prize Competition',
    organization: 'Hult Prize Foundation',
    type: 'competition',
    description: 'World\'s largest student competition for social good. Win $1M in seed funding for your startup idea.',
    deadline: '2024-12-01',
    location: 'Global',
    amount: '$1,000,000',
    url: 'https://hultprize.org',
    tags: ['entrepreneurship', 'social-impact', 'startup'],
  },
  {
    id: '5',
    title: 'Fulbright Scholarship',
    organization: 'U.S. Department of State',
    type: 'scholarship',
    description: 'Prestigious international educational exchange program for graduate studies, research, or teaching abroad.',
    deadline: '2024-10-15',
    location: 'International',
    amount: 'Full Funding',
    url: 'https://us.fulbrightonline.org',
    tags: ['graduate', 'research', 'international'],
  },
  {
    id: '6',
    title: 'Microsoft Explore Internship',
    organization: 'Microsoft',
    type: 'internship',
    description: '12-week summer internship designed for first and second-year college students passionate about technology.',
    deadline: '2024-09-30',
    location: 'Redmond, WA',
    amount: '$7,500/month',
    url: 'https://careers.microsoft.com',
    tags: ['tech', 'undergraduate', 'paid'],
  },
  {
    id: '7',
    title: 'World Economic Forum Young Global Leaders',
    organization: 'World Economic Forum',
    type: 'summit',
    description: 'A community of innovative, enterprising, and socially-minded leaders under 40 shaping the future.',
    deadline: '2024-07-15',
    location: 'Davos, Switzerland',
    url: 'https://weforum.org/communities/young-global-leaders',
    tags: ['leadership', 'global', 'executive'],
  },
  {
    id: '8',
    title: 'Google Solution Challenge',
    organization: 'Google Developer Student Clubs',
    type: 'competition',
    description: 'Build solutions using Google technologies to address UN Sustainable Development Goals.',
    deadline: '2024-03-31',
    location: 'Global',
    amount: '$10,000',
    url: 'https://developers.google.com/community/gdsc-solution-challenge',
    tags: ['tech', 'social-impact', 'google'],
  },
  {
    id: '9',
    title: 'Rhodes Scholarship',
    organization: 'Rhodes Trust',
    type: 'scholarship',
    description: 'The oldest and most prestigious international scholarship for postgraduate study at Oxford University.',
    deadline: '2024-10-01',
    location: 'Oxford, UK',
    amount: 'Full Funding',
    url: 'https://rhodeshouse.ox.ac.uk/scholarships/',
    tags: ['graduate', 'prestigious', 'uk'],
  },
  {
    id: '10',
    title: 'Meta University Internship',
    organization: 'Meta',
    type: 'internship',
    description: 'A paid 10-week summer internship for first-generation college students and underrepresented minorities.',
    deadline: '2024-11-15',
    location: 'Menlo Park, CA',
    amount: '$8,000/month',
    url: 'https://metacareers.com/careerprograms/pathways/metau',
    tags: ['tech', 'diversity', 'paid'],
  },
  {
    id: '11',
    title: 'Clinton Global Initiative University',
    organization: 'Clinton Foundation',
    type: 'summit',
    description: 'Annual meeting to empower student leaders to turn their ideas into action and create positive change.',
    deadline: '2024-11-01',
    location: 'Various US Cities',
    url: 'https://clintonfoundation.org/cgi-u',
    tags: ['leadership', 'social-impact', 'networking'],
  },
  {
    id: '12',
    title: 'Imagine Cup',
    organization: 'Microsoft',
    type: 'competition',
    description: 'Global technology competition empowering students to use technology to solve real-world problems.',
    deadline: '2024-02-15',
    location: 'Global',
    amount: '$100,000',
    url: 'https://imaginecup.microsoft.com',
    tags: ['tech', 'innovation', 'microsoft'],
  },
];

export const locations = [
  'All Locations',
  'United States',
  'International',
  'Europe',
  'Global',
  'Remote',
];

export const deadlineFilters = [
  { label: 'All Deadlines', value: 'all' },
  { label: 'Next 30 days', value: '30' },
  { label: 'Next 60 days', value: '60' },
  { label: 'Next 90 days', value: '90' },
];
