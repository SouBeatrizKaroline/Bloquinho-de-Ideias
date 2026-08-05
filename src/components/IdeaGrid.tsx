import { Idea } from '@/types/idea'
import { IdeaCard } from './IdeaCard'
import { EmptyState } from './EmptyState'

interface IdeaGridProps {
  ideas: Idea[]
  totalIdeasCount: number
  searchTerm: string
  selectedCategory: string
  onToggleFavorite: (id: string, current: boolean) => void
  onDelete: (id: string) => void
}

export function IdeaGrid({
  ideas,
  totalIdeasCount,
  searchTerm,
  selectedCategory,
  onToggleFavorite,
  onDelete,
}: IdeaGridProps) {
  if (totalIdeasCount === 0) {
    return <EmptyState type="no-ideas" />
  }

  if (ideas.length === 0) {
    return (
      <EmptyState type="no-results" searchTerm={searchTerm} categoryFilter={selectedCategory} />
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
      {ideas.map((idea) => (
        <IdeaCard
          key={idea.id}
          idea={idea}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
