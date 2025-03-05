export interface ProjectFeature {
  title: string
  description: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  problem: string
  solution: string
  image: string
  tags: string[]
  features: ProjectFeature[]
  youtubeId?: string
}

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    slug: "rehabilitation-program",
    title: "ACL Rehabilitation Program",
    summary:
      "A comprehensive rehabilitation protocol designed for athletes recovering from ACL reconstruction surgery, focusing on progressive strength building, mobility restoration, and safe return to sport.",
    problem:
      "Athletes recovering from ACL reconstruction often face challenges with inconsistent rehabilitation approaches, unclear progression criteria, and high re-injury rates due to premature return to sport.",
    solution:
      "This program provides a structured, evidence-based rehabilitation protocol with clear progression milestones, objective testing criteria, and sport-specific training to ensure optimal recovery and minimize re-injury risk.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Rehabilitation", "Sports Medicine", "Protocol"],
    features: [
      {
        title: "Phase-Based Progression",
        description: "Clearly defined rehabilitation phases with specific goals and criteria for advancement.",
      },
      {
        title: "Objective Testing Protocols",
        description: "Standardized assessments to measure strength, stability, and functional performance.",
      },
      {
        title: "Sport-Specific Training",
        description: "Customized exercises that replicate the demands of the athlete's specific sport.",
      },
      {
        title: "Psychological Readiness",
        description: "Tools to assess and address psychological barriers to return to sport.",
      },
    ],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    slug: "injury-prevention",
    title: "Injury Prevention Workshop",
    summary:
      "An educational program designed for high school athletes to reduce injury risk through proper movement patterns, strength training, and recovery strategies.",
    problem:
      "High school athletes often lack proper education on injury prevention, leading to higher rates of preventable injuries and potentially affecting their athletic development and long-term health.",
    solution:
      "This workshop provides comprehensive education on biomechanics, movement screening, corrective exercises, and recovery strategies tailored specifically for adolescent athletes and their unique developmental needs.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Education", "Prevention", "Youth"],
    features: [
      {
        title: "Movement Screening",
        description: "Assessment tools to identify movement deficiencies and injury risk factors.",
      },
      {
        title: "Corrective Exercise Library",
        description: "Targeted exercises to address common movement dysfunctions in young athletes.",
      },
      {
        title: "Coach Education",
        description: "Resources for coaches to implement injury prevention strategies in team practices.",
      },
      {
        title: "Recovery Protocols",
        description: "Age-appropriate recovery strategies to prevent overtraining and burnout.",
      },
    ],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    slug: "performance-analytics",
    title: "Performance Analytics Dashboard",
    summary:
      "A data-driven approach to athlete monitoring and performance optimization, tracking key metrics to inform training decisions and maximize athletic potential.",
    problem:
      "Coaches and athletic trainers often lack accessible, comprehensive data on athlete performance, making it difficult to make informed decisions about training loads, recovery needs, and performance optimization.",
    solution:
      "This analytics dashboard aggregates data from multiple sources to provide actionable insights on athlete readiness, training response, and performance trends, enabling more personalized and effective training programs.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Analytics", "Technology", "Performance"],
    features: [
      {
        title: "Readiness Monitoring",
        description:
          "Daily assessments of athlete readiness based on sleep, soreness, and subjective wellness metrics.",
      },
      {
        title: "Load Management",
        description: "Tracking of acute and chronic training loads to optimize performance and reduce injury risk.",
      },
      {
        title: "Performance Trending",
        description: "Visualization of key performance indicators over time to identify patterns and progress.",
      },
      {
        title: "Customizable Metrics",
        description: "Ability to tailor tracked metrics to specific sports and individual athlete needs.",
      },
    ],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>()

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tagsSet.add(tag)
    })
  })

  return Array.from(tagsSet).sort()
}

