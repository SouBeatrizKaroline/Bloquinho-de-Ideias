export type IdeaStatus =
  | 'Ideia Inicial'
  | 'Em Desenvolvimento'
  | 'Em Estudo'
  | 'Pronta para Começar'
  | 'Concluída'

export interface Idea {
  id: string
  title: string
  category: string
  description: string
  objective?: string
  technologies?: string
  status: IdeaStatus
  favorite: boolean
  createdAt: string
}

export interface CategoryInfo {
  id: string
  label: string
  emoji: string
  color: string
  badgeBg: string
  badgeText: string
  chipActive: string
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'jogos',
    label: 'Jogos',
    emoji: '🎮',
    color: '#6366f1',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-700',
    chipActive: 'bg-indigo-600 text-white',
  },
  {
    id: 'tecnologia',
    label: 'Tecnologia',
    emoji: '💻',
    color: '#3b82f6',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    chipActive: 'bg-blue-600 text-white',
  },
  {
    id: 'ia',
    label: 'IA',
    emoji: '🤖',
    color: '#8b5cf6',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    chipActive: 'bg-purple-600 text-white',
  },
  {
    id: 'saude',
    label: 'Saúde',
    emoji: '🏥',
    color: '#14b8a6',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-700',
    chipActive: 'bg-teal-600 text-white',
  },
  {
    id: 'educacao',
    label: 'Educação',
    emoji: '📚',
    color: '#f59e0b',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-700',
    chipActive: 'bg-amber-600 text-white',
  },
  {
    id: 'design',
    label: 'Design',
    emoji: '🎨',
    color: '#ec4899',
    badgeBg: 'bg-pink-100',
    badgeText: 'text-pink-700',
    chipActive: 'bg-pink-600 text-white',
  },
  {
    id: 'negocios',
    label: 'Negócios',
    emoji: '🚀',
    color: '#f97316',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-700',
    chipActive: 'bg-orange-600 text-white',
  },
  {
    id: 'sustentabilidade',
    label: 'Sustentabilidade',
    emoji: '🌱',
    color: '#22c55e',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    chipActive: 'bg-emerald-600 text-white',
  },
]

export const STATUS_OPTIONS: IdeaStatus[] = [
  'Ideia Inicial',
  'Em Desenvolvimento',
  'Em Estudo',
  'Pronta para Começar',
  'Concluída',
]

export const SEED_IDEAS: Omit<Idea, 'id' | 'createdAt'>[] = [
  {
    title: 'RPG Narrativo Interativo',
    category: '🎮 Jogos',
    description:
      'Um jogo onde o jogador cria sua própria história por meio de escolhas e eventos aleatórios.',
    objective: 'Criar uma experiência de narrativa dinâmica e imersiva.',
    technologies: 'JavaScript, Canvas',
    status: 'Ideia Inicial',
    favorite: true,
  },
  {
    title: 'App de Finanças Pessoais',
    category: '💻 Tecnologia',
    description:
      'Um aplicativo para controlar gastos diários, categorizar despesas e criar metas de economia.',
    objective: 'Ajudar pessoas a organizarem seu dinheiro de forma simples e intuitiva.',
    technologies: 'HTML, CSS, JavaScript, LocalStorage',
    status: 'Em Desenvolvimento',
    favorite: false,
  },
  {
    title: 'Chatbot de Estudos',
    category: '🤖 IA',
    description:
      'Um assistente virtual interativo que ajuda estudantes a revisar conteúdos e tirar dúvidas rápidas.',
    objective: 'Tornar o estudo mais dinâmico, personalizado e acessível.',
    technologies: 'JavaScript, APIs de IA',
    status: 'Em Estudo',
    favorite: false,
  },
  {
    title: 'Horta Urbana Conectada',
    category: '🌱 Sustentabilidade',
    description:
      'Um sistema inteligente para monitorar umidade, luz e irrigação de hortas em pequenos espaços.',
    objective: 'Incentivar a alimentação saudável e o cultivo sustentável em apartamentos.',
    technologies: 'Sensores, JavaScript',
    status: 'Ideia Inicial',
    favorite: false,
  },
  {
    title: 'Mural de Inspirações',
    category: '🎨 Design',
    description:
      'Um espaço visual intuitivo para organizar paletas de cores, tipografias e referências visuais.',
    objective: 'Centralizar inspirações criativas de projetos em um só lugar.',
    technologies: 'CSS Grid, LocalStorage',
    status: 'Pronta para Começar',
    favorite: true,
  },
]
