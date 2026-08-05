import { Idea, SEED_IDEAS, IdeaStatus } from '@/types/idea'
import pb from '@/lib/pocketbase/client'

const STORAGE_KEY = 'bloquinhoIdeas'

export function getLocalIdeas(): Idea[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      const initial: Idea[] = SEED_IDEAS.map((seed, index) => ({
        ...seed,
        id: `seed-${Date.now()}-${index}`,
        createdAt: new Date(Date.now() - (5 - index) * 86400000).toISOString(),
      }))
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial))
      return initial
    }
    return JSON.parse(raw)
  } catch (err) {
    console.error('Erro ao ler LocalStorage:', err)
    return []
  }
}

export function saveLocalIdeas(ideas: Idea[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas))
  } catch (err) {
    console.error('Erro ao salvar LocalStorage:', err)
  }
}

export async function fetchIdeasFromPB(): Promise<Idea[]> {
  try {
    const records = await pb.collection('ideas').getFullList({ sort: '-created' })
    if (records.length === 0) {
      return getLocalIdeas()
    }
    return records.map((r) => ({
      id: r.id,
      title: r.title,
      category: r.category,
      description: r.description,
      objective: r.objective || '',
      technologies: r.technologies || '',
      status: (r.status as IdeaStatus) || 'Ideia Inicial',
      favorite: !!r.favorite,
      createdAt: r.created || new Date().toISOString(),
    }))
  } catch {
    return getLocalIdeas()
  }
}

export async function createIdeaService(newIdea: Omit<Idea, 'id' | 'createdAt'>): Promise<Idea> {
  const item: Idea = {
    ...newIdea,
    id: `idea-${Date.now()}`,
    createdAt: new Date().toISOString(),
  }

  const current = getLocalIdeas()
  const updated = [item, ...current]
  saveLocalIdeas(updated)

  try {
    const pbRecord = await pb.collection('ideas').create({
      title: newIdea.title,
      category: newIdea.category,
      description: newIdea.description,
      objective: newIdea.objective || '',
      technologies: newIdea.technologies || '',
      status: newIdea.status,
      favorite: newIdea.favorite,
    })
    item.id = pbRecord.id
  } catch {
    // fallback to local item
  }

  return item
}

export async function toggleFavoriteService(id: string, currentStatus: boolean): Promise<boolean> {
  const current = getLocalIdeas()
  const updated = current.map((item) =>
    item.id === id ? { ...item, favorite: !currentStatus } : item,
  )
  saveLocalIdeas(updated)

  try {
    await pb.collection('ideas').update(id, { favorite: !currentStatus })
  } catch {
    // silently fail back to local
  }

  return !currentStatus
}

export async function deleteIdeaService(id: string): Promise<void> {
  const current = getLocalIdeas()
  const updated = current.filter((item) => item.id !== id)
  saveLocalIdeas(updated)

  try {
    await pb.collection('ideas').delete(id)
  } catch {
    // local fallback
  }
}

export async function clearAllIdeasService(): Promise<void> {
  saveLocalIdeas([])
  try {
    const records = await pb.collection('ideas').getFullList()
    for (const r of records) {
      await pb.collection('ideas').delete(r.id)
    }
  } catch {
    // local fallback
  }
}
