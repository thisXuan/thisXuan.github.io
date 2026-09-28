export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computational Science and Engineering',
    link: 'https://www.gatech.edu',
    year: 2027,
  },
  {
    school: 'South China University of Technology',
    degree: 'B.Eng. Software Engineering',
    link: 'https://www.scut.edu.cn/en/',
    year: 2025,
  },
];

export default degrees;
