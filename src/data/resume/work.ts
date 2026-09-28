/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Amazon Web Services',
    position: 'Software Engineer Intern',
    url: 'https://aws.amazon.com',
    startDate: '2026-05-01',
    endDate: '2026-08-31',
    highlights: [
      'Built a production Python extended client for an Amazon RDS data-plane service with authentication management, exception handling, CloudWatch observability, and CI integration tests.',
      'Built AI-powered onboarding automation that generates validated AWS CDK infrastructure code, unit tests, and code reviews, enabling onboarding for 10+ RDS teams and reducing turnaround from days to hours.',
      'Expanded production load-testing infrastructure to expose scalability and thread-starvation risks earlier.',
    ],
  },
  {
    name: 'Meituan',
    position: 'Software Engineer Intern',
    url: 'https://www.meituan.com',
    startDate: '2025-04-01',
    endDate: '2025-06-30',
    highlights: [
      'Built a RAG-powered AI agent for an autonomous-driving data platform using LangChain and hybrid FAISS plus BM25 retrieval.',
      'Implemented a Vue.js, Flask, and Supabase search interface and deployed it as an MCP tool.',
      'Accelerated Webviz protobuf decoding with Rust and WebAssembly modules in Web Workers, reducing processing time by up to 9x.',
    ],
  },
  {
    name: 'Momenta',
    position: 'Software Engineer Intern',
    url: 'https://www.momenta.ai',
    startDate: '2025-01-01',
    endDate: '2025-03-31',
    highlights: [
      'Built a high-performance C SDK with multithreaded file downloads reaching 1 GB/s and reduced storage overhead by eliminating redundant full-bag generation.',
      'Enabled JavaScript-to-C cross-compilation and packaged C code as an npm module for Node.js, supporting Linux, macOS, and Docker for 500+ colleagues.',
    ],
  },
  {
    name: 'National University of Singapore Research Institute',
    position: 'Software Engineer Intern',
    url: 'https://www.nusri.cn',
    startDate: '2024-09-01',
    endDate: '2024-12-31',
    highlights: [
      'Built a Spring Cloud microservices architecture with 20+ RESTful APIs, Elasticsearch search, and ShardingSphere database sharding.',
      'Implemented Redis caching, distributed IDs, and Redisson locks for one-order-per-user behavior under concurrent flash-sale traffic.',
      'Reduced monitoring-dashboard query latency from 1,800 ms to 20 ms through SQL aggregation optimization and indexing.',
    ],
  },
];

export default work;
