export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { title: 'Java', competency: 5, category: ['Languages'] },
  { title: 'Python', competency: 5, category: ['Languages'] },
  { title: 'C/C++', competency: 4, category: ['Languages'] },
  { title: 'Rust', competency: 4, category: ['Languages'] },
  {
    title: 'JavaScript/TypeScript',
    competency: 4,
    category: ['Languages'],
  },
  { title: 'SQL', competency: 4, category: ['Data Systems', 'Languages'] },
  { title: 'Spring Boot', competency: 5, category: ['Web Development'] },
  { title: 'Spring Cloud', competency: 4, category: ['Web Development'] },
  { title: 'Flask', competency: 4, category: ['Web Development'] },
  { title: 'FastAPI', competency: 4, category: ['Web Development'] },
  { title: 'Node.js', competency: 4, category: ['Web Development'] },
  { title: 'React', competency: 4, category: ['Web Development'] },
  { title: 'Vue', competency: 4, category: ['Web Development'] },
  { title: 'LangChain', competency: 4, category: ['AI Engineering'] },
  { title: 'PyTorch', competency: 4, category: ['AI Engineering'] },
  { title: 'RAG', competency: 4, category: ['AI Engineering'] },
  { title: 'AI Agents', competency: 4, category: ['AI Engineering'] },
  { title: 'LLM APIs', competency: 4, category: ['AI Engineering'] },
  { title: 'Prompt Engineering', competency: 4, category: ['AI Engineering'] },
  { title: 'MySQL', competency: 4, category: ['Data Systems'] },
  { title: 'PostgreSQL', competency: 4, category: ['Data Systems'] },
  { title: 'Redis', competency: 5, category: ['Data Systems'] },
  { title: 'MongoDB', competency: 3, category: ['Data Systems'] },
  { title: 'Elasticsearch', competency: 4, category: ['Data Systems'] },
  { title: 'Kafka/RabbitMQ', competency: 4, category: ['Data Systems'] },
  {
    title: 'Vector Databases',
    competency: 4,
    category: ['Data Systems', 'AI Engineering'],
  },
  { title: 'AWS', competency: 4, category: ['Infrastructure'] },
  { title: 'Docker', competency: 4, category: ['Infrastructure'] },
  { title: 'Linux', competency: 4, category: ['Infrastructure'] },
  { title: 'GitHub Actions', competency: 4, category: ['Infrastructure'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
