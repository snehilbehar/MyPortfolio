import { useEffect, useState } from 'react';
import type { PortfolioContent } from './types';

const colorDots = [
  { label: 'Blue', className: 'dot dot-blue' },
  { label: 'Red', className: 'dot dot-red' },
  { label: 'Yellow', className: 'dot dot-yellow' },
  { label: 'Green', className: 'dot dot-green' },
];

const fallbackContent: PortfolioContent = {
  hero: {
    name: 'Your Name',
    headline: 'Product-minded software engineer building polished, useful web experiences.',
    subheadline: 'I design and build fast, accessible products with strong attention to detail.',
    location: 'Your City, Country',
    availability: 'Open to full-time roles and select freelance work',
    avatarLabel: 'YN',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Contact Me', href: '#contact' },
  },
  about: {
    title: 'About',
    summary:
      'Write a concise summary of your background, strengths, and the kind of work you want to be known for.',
    highlights: [
      'Strong focus on product quality and usability',
      'Comfortable across frontend, backend, and cloud workflows',
      'Enjoys turning complex problems into simple interfaces',
    ],
  },
  stats: [
    { label: 'Years of experience', value: '5+' },
    { label: 'Projects shipped', value: '20+' },
    { label: 'Satisfied clients', value: '10+' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'CSS', 'Accessibility', 'Design Systems', 'API Design'],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Company Name',
      period: '2023 - Present',
      description: 'Led frontend architecture, improved performance, and launched customer-facing features.',
      achievements: ['Reduced page load time by 40%', 'Built reusable UI components', 'Collaborated closely with design and product'],
    },
    {
      role: 'Software Engineer',
      company: 'Previous Company',
      period: '2020 - 2023',
      description: 'Worked across product development, internal tooling, and integrations.',
      achievements: [
        'Delivered a redesign with a cleaner information architecture',
        'Created internal tools that saved the team hours every week',
      ],
    },
  ],
  education: [{ degree: 'B.Sc. in Computer Science', institution: 'University Name', period: '2016 - 2020' }],
  projects: [
    {
      name: 'Project One',
      summary: 'A short summary of the problem, what you built, and the outcome.',
      tags: ['React', 'API', 'Design'],
      link: 'https://example.com',
    },
    {
      name: 'Project Two',
      summary: 'Another concise project description that shows scope and impact.',
      tags: ['TypeScript', 'Analytics', 'Automation'],
      link: 'https://example.com',
    },
  ],
  articles: [
    {
      title: 'What I learned shipping a polished portfolio site',
      source: 'Blog',
      summary: 'A short article preview goes here.',
      link: 'https://example.com',
    },
  ],
  contact: {
    title: 'Let’s work together',
    summary: 'Share the easiest way for people to contact you and the type of opportunities you want.',
    email: 'you@example.com',
  },
  chatbot: {
    title: 'Ask about your profile',
    subtitle: 'Visitors can ask about your experience, projects, education, or links, and the assistant responds using the profile content and public profiles.',
    welcome: 'Hi, I can answer questions about Snehil\'s background, GitHub, LinkedIn, experience, and projects.',
    suggestedQuestions: [
      'What does Snehil specialize in?',
      'Where did Snehil work at Cisco?',
      'What projects should I look at first?',
      'How can I contact Snehil?',
    ],
  },
};

type ChatMessage = {
  id: number;
  role: 'assistant' | 'visitor';
  text: string;
};

function formatLinkList(links: Array<{ label: string; href: string }>) {
  return links.map((link) => `${link.label}: ${link.href}`).join(' | ');
}

function buildChatResponse(content: PortfolioContent, question: string) {
  const normalizedQuestion = question.toLowerCase();
  const githubLink = content.links.find((link) => link.label === 'GitHub')?.href ?? 'https://github.com/snehilbehar';
  const linkedinLink = content.links.find((link) => link.label === 'LinkedIn')?.href ?? 'https://www.linkedin.com/in/snehilbehar';
  const contactLine = formatLinkList(content.links);

  const sourceLine = `Based on the profile summary, GitHub, and LinkedIn for Snehil Behar.`;

  if (/^(hi|hello|hey|start|help)/.test(normalizedQuestion)) {
    return `${sourceLine} Ask me about experience, projects, education, skills, or contact details.`;
  }

  if (normalizedQuestion.includes('contact') || normalizedQuestion.includes('email') || normalizedQuestion.includes('reach') || normalizedQuestion.includes('phone')) {
    return `${sourceLine} The best ways to reach Snehil are ${contactLine}.`;
  }

  if (normalizedQuestion.includes('github') || normalizedQuestion.includes('project') || normalizedQuestion.includes('repo')) {
    const projectNames = content.projects.map((project) => project.name).join(', ');
    return `${sourceLine} The GitHub profile is ${githubLink}. The strongest projects to review are ${projectNames}. These show backend systems, TDD, cloud infrastructure, and automation work.`;
  }

  if (normalizedQuestion.includes('linkedin')) {
    return `${sourceLine} The LinkedIn profile is ${linkedinLink}. It matches the resume summary: software engineering, backend systems, and cloud-focused experience.`;
  }

  if (normalizedQuestion.includes('education') || normalizedQuestion.includes('degree') || normalizedQuestion.includes('school')) {
    const educationSummary = content.education.map((item) => `${item.degree} at ${item.institution} (${item.period})`).join('; ');
    return `${sourceLine} Education includes ${educationSummary}.`;
  }

  if (normalizedQuestion.includes('experience') || normalizedQuestion.includes('work') || normalizedQuestion.includes('cisco') || normalizedQuestion.includes('career')) {
    const experienceSummary = content.experience
      .map((item) => `${item.role} at ${item.company} (${item.period})`)
      .join('; ');
    return `${sourceLine} The main experience is ${experienceSummary}. The Cisco work focused on backend microservices, C/C++, Linux optimization, TDD, and automation.`;
  }

  if (normalizedQuestion.includes('skill') || normalizedQuestion.includes('stack') || normalizedQuestion.includes('tech') || normalizedQuestion.includes('language')) {
    return `${sourceLine} The core stack is ${content.skills.join(', ')}. The resume emphasizes C/C++, Python, object-oriented design, design patterns, TDD, microservices, REST APIs, Linux, AWS, and Azure.`;
  }

  if (normalizedQuestion.includes('about') || normalizedQuestion.includes('who is') || normalizedQuestion.includes('tell me')) {
    return `${sourceLine} Snehil is a software engineer with 3+ years of experience in object-oriented software development, scalable backend architecture, and system optimization. The profile also highlights enterprise cloud work, AI-assisted workflows, and 16M+ user-scale systems.`;
  }

  return `${sourceLine} I can answer questions about Snehil's background, GitHub, LinkedIn, projects, education, skills, or contact info. Try asking about Cisco, the projects, or the main technologies used.`;
}

function ChatbotSection({ content }: { content: PortfolioContent }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: 'assistant', text: content.chatbot.welcome },
  ]);
  const [question, setQuestion] = useState('');

  function sendMessage(input: string) {
    const trimmedQuestion = input.trim();
    if (!trimmedQuestion) {
      return;
    }

    const visitorMessage: ChatMessage = {
      id: Date.now(),
      role: 'visitor',
      text: trimmedQuestion,
    };

    const assistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      text: buildChatResponse(content, trimmedQuestion),
    };

    setMessages((currentMessages) => [...currentMessages, visitorMessage, assistantMessage]);
    setQuestion('');
  }

  return (
    <section id="chatbot" className="content-section chatbot-section">
      <SectionHeader
        eyebrow="Chat"
        title={content.chatbot.title}
        description={content.chatbot.subtitle}
      />
      <div className="chatbot-grid">
        <div className="chat-window panel">
          <div className="chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`chat-message chat-message-${message.role}`}>
                <span className="chat-role">{message.role === 'assistant' ? 'Assistant' : 'Visitor'}</span>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(question);
            }}
          >
            <label className="sr-only" htmlFor="chat-question">
              Ask about Snehil
            </label>
            <input
              id="chat-question"
              name="chat-question"
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about experience, GitHub, LinkedIn, or projects"
            />
            <button type="submit" className="primary-button">
              Ask
            </button>
          </form>
        </div>

        <aside className="panel chat-suggestions">
          <h3>Try asking</h3>
          <div className="chip-cloud">
            {content.chatbot.suggestedQuestions.map((suggestion) => (
              <button key={suggestion} type="button" className="chip suggestion-chip" onClick={() => sendMessage(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>
          <p>
            Answers are generated from the portfolio content and the public GitHub and LinkedIn links listed on the site.
          </p>
        </aside>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContent() {
      try {
        const response = await fetch('/profile.json', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Unable to load profile.json (${response.status})`);
        }

        const data = (await response.json()) as PortfolioContent;
        setContent(data);
      } catch (loadError) {
        if (controller.signal.aborted) {
          return;
        }

        setError(loadError instanceof Error ? loadError.message : 'Unable to load portfolio content.');
        setContent(fallbackContent);
      }
    }

    void loadContent();
    return () => controller.abort();
  }, []);

  if (!content) {
    return (
      <main className="page-shell loading-state">
        <div className="loading-card">
          <div className="brand-mark" aria-hidden="true">
            {colorDots.map((dot) => (
              <span key={dot.label} className={dot.className} />
            ))}
          </div>
          <p>Loading portfolio…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            {colorDots.map((dot) => (
              <span key={dot.label} className={dot.className} />
            ))}
          </div>
          <div>
            <span className="brand-kicker">Portfolio</span>
            <strong>{content.hero.name}</strong>
          </div>
        </div>

        <nav className="nav-pills" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Available for opportunities</span>
          <h1>{content.hero.headline}</h1>
          <p className="hero-summary">{content.hero.subheadline}</p>

          <div className="hero-meta">
            <span>{content.hero.location}</span>
            <span>{content.hero.availability}</span>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href={content.hero.primaryCta.href}>
              {content.hero.primaryCta.label}
            </a>
            <a className="secondary-button" href={content.hero.secondaryCta.href}>
              {content.hero.secondaryCta.label}
            </a>
          </div>

          <div className="link-row">
            {content.links.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="profile-panel">
          <div className="avatar" aria-hidden="true">
            {content.hero.avatarLabel}
          </div>
          <div className="profile-card">
            <span className="profile-title">{content.hero.name}</span>
            <p>{content.about.summary}</p>
          </div>
          <div className="stats-grid">
            {content.stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      {error ? <p className="inline-warning">{error}</p> : null}

      <ChatbotSection content={content} />

      <section id="about" className="content-section">
        <SectionHeader
          eyebrow="Overview"
          title={content.about.title}
          description="Reliable systems. Thoughtful engineering."
        />
        <div className="two-column">
          <div className="panel">
            <p className="lead">{content.about.summary}</p>
          </div>
          <div className="panel list-panel">
            <h3>Highlights</h3>
            <ul>
              {content.about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Stack"
          title="Skills"
          description="The tools and practices behind my work."
        />
        <div className="chip-cloud" aria-label="Skills">
          {content.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="Building and improving software at enterprise scale."
        />
        <div className="stack-list">
          {content.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Education"
          title="Learning"
          description="The foundations behind my engineering practice."
        />
        <div className="grid-cards">
          {content.education.map((item) => (
            <article key={`${item.degree}-${item.institution}`} className="mini-card">
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <SectionHeader
          eyebrow="Showcase"
          title="Projects"
          description="A selection of backend, cloud, and automation projects."
        />
        <div className="grid-cards project-grid">
          {content.projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-badge">Project</div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip chip-small">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} code on GitHub`}>
                    View code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.demoLabel ?? "Live demo"}: ${project.name}`}>
                    {project.demoLabel ?? 'Live demo'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Writing"
          title="Articles"
          description="Ideas and explorations in software engineering."
        />
        <div className="stack-list">
          {content.articles.map((article) => (
            <article key={article.title} className="article-card">
              <div>
                <span className="article-source">{article.source}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </div>
              <a href={article.link} target="_blank" rel="noreferrer">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <SectionHeader
          eyebrow="Contact"
          title={content.contact.title}
          description={content.contact.summary}
        />
        <div className="contact-card">
          <div>
            <span className="contact-label">Email</span>
            <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
          </div>
          <a className="primary-button" href={`mailto:${content.contact.email}`}>
            Send email
          </a>
        </div>
      </section>


      <footer className="footer">
        <span>{content.hero.name} · Software Engineer</span>
      </footer>
    </main>
  );
}

export default App;

