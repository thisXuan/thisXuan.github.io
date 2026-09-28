export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  date?: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Community Review',
    subtitle: 'Yelp-like local services platform',
    link: 'https://github.com/thisXuan/community_review',
    desc: 'Redis-backed local-services platform with token authentication, social features, a high-concurrency flash-sale workflow, and resilient cache strategies.',
    tech: ['Java', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'RabbitMQ'],
    featured: true,
  },
  {
    title: 'PokerMind',
    subtitle: "LLM-powered Texas Hold'em agent",
    link: 'https://github.com/Neptunian-shushu/PokerMind-LoRA-Tuned-LLM-for-Texas-Hold-em-Poker',
    desc: 'Fine-tuned Llama 3 8B with LoRA on 110K poker hands, improving action accuracy from 40.03% to 90.10%, and built an interactive human-AI gameplay platform.',
    tech: ['PyTorch', 'LoRA', 'FastAPI', 'React', 'Vite'],
    featured: true,
  },
];

export default data;
