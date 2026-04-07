// Portfolio Data - Edit this file to customize your portfolio content

export const personalInfo = {
  name: "John Developer",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  bio: "Passionate full-stack developer with expertise in React, Python, and modern web technologies. I love creating elegant solutions to complex problems and continuously learning new technologies to stay at the forefront of web development.",
  email: "john.developer@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  social: {
    github: "https://github.com/johndeveloper",
    linkedin: "https://linkedin.com/in/johndeveloper",
    twitter: "https://twitter.com/johndev",
    portfolio: "https://johndeveloper.dev"
  }
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Redux", level: 80 },
    { name: "Next.js", level: 75 }
  ],
  backend: [
    { name: "Python", level: 90 },
    { name: "FastAPI", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 80 },
    { name: "Django", level: 75 },
    { name: "REST APIs", level: 90 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS", level: 70 },
    { name: "Linux", level: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tech: ["React", "Python", "FastAPI", "MongoDB", "Stripe"],
    github: "https://github.com/johndeveloper/ecommerce",
    demo: "https://demo-ecommerce.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task management application with team features and analytics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    github: "https://github.com/johndeveloper/taskmanager",
    demo: "https://demo-tasks.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with charts, forecasts, and location-based weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/johndeveloper/weather",
    demo: "https://demo-weather.com",
    featured: false
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comments, and user authentication.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tech: ["React", "Python", "Django", "PostgreSQL", "Redis"],
    github: "https://github.com/johndeveloper/blog",
    demo: "https://demo-blog.com",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using React and Python. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers on major project",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartUp Labs",
    location: "San Francisco, CA",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers.",
    achievements: [
      "Built 10+ production web applications",
      "Reduced bug reports by 50% through comprehensive testing",
      "Introduced code review best practices"
    ]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Digital Agency",
    location: "Remote",
    period: "2018 - 2020",
    description: "Started career building responsive websites and learning full-stack development fundamentals.",
    achievements: [
      "Delivered 20+ client websites",
      "Learned React, Python, and database management",
      "Contributed to open-source projects"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, Tech Solutions Inc.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "John is an exceptional developer who consistently delivers high-quality code. His ability to solve complex problems and mentor others makes him invaluable to our team."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, StartUp Labs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "Working with John was a pleasure. He has a great eye for detail and always goes above and beyond to ensure projects are completed to the highest standard."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Designer, Digital Agency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "John's technical skills combined with his understanding of user experience make him a fantastic collaborator. He brings ideas to life beautifully."
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring large-scale React applications with proper state management and component architecture.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: 2,
    title: "FastAPI vs Flask: A Comprehensive Guide",
    excerpt: "Comparing two popular Python web frameworks and when to use each one for your next project.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80"
  },
  {
    id: 3,
    title: "Optimizing Database Queries",
    excerpt: "Practical tips for improving database performance and reducing query execution time in production applications.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Database",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
  }
];
