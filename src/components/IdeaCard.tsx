import { Star, Trash2 } from 'lucide-react'
import { Idea, CATEGORIES } from '@/types/idea'
import { Button } from '@/components/ui/button'

interface IdeaCardProps {
  idea: Idea
  onToggleFavorite: (id: string, current: boolean) => void
  onDelete: (id: string) => void
}

export function IdeaCard({ idea, onToggleFavorite, onDelete }: IdeaCardProps) {
  const matchingCat =
    CATEGORIES.find((c) => idea.category.includes(c.label) || idea.category.includes(c.emoji)) ||
    CATEGORIES[0]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Em Desenvolvimento':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Em Estudo':
        return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'Pronta para Começar':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      case 'Concluída':
        return 'bg-teal-100 text-teal-800 border-teal-200'
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200'
    }
  }

  const techTags = idea.technologies
    ? idea.technologies
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : []

  const formattedDate = new Date(idea.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const handleDeleteConfirm = () => {
    if (window.confirm(`Deseja apagar a ideia "${idea.title}"?`)) {
      onDelete(idea.id)
    }
  }

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-5 border transition-all duration-300 animate-fade-in-up hover:-translate-y-1 ${
        idea.favorite
          ? 'bg-amber-50/70 border-amber-300/80 shadow-md ring-1 ring-amber-200'
          : 'bg-white border-stone-200/90 shadow-subtle hover:shadow-elevation'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-inner ${matchingCat.badgeBg}`}
            >
              {matchingCat.emoji}
            </span>
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border border-stone-200/60 ${matchingCat.badgeBg} ${matchingCat.badgeText}`}
            >
              {matchingCat.label}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onToggleFavorite(idea.id, idea.favorite)}
              className={`h-8 w-8 rounded-full transition-transform active:scale-125 ${
                idea.favorite
                  ? 'text-amber-500 hover:bg-amber-100'
                  : 'text-stone-300 hover:text-amber-500 hover:bg-stone-100'
              }`}
              title={idea.favorite ? 'Remover dos favoritos' : 'Favoritar ideia'}
            >
              <Star className={`h-4 w-4 ${idea.favorite ? 'fill-amber-400' : ''}`} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleDeleteConfirm}
              className="h-8 w-8 rounded-full text-stone-300 hover:text-red-600 hover:bg-red-50 opacity-80 group-hover:opacity-100"
              title="Apagar ideia"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2">{idea.title}</h3>

        <p className="text-xs text-stone-600 leading-relaxed mb-4">{idea.description}</p>

        {idea.objective && (
          <div className="mb-3 bg-stone-50/80 p-2.5 rounded-xl border border-stone-100 text-xs text-stone-700">
            <span className="font-semibold text-stone-900 block mb-0.5">🎯 Objetivo:</span>
            {idea.objective}
          </div>
        )}

        {techTags.length > 0 && (
          <div className="mb-4">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
              🛠️ Tecnologias
            </span>
            <div className="flex flex-wrap gap-1.5">
              {techTags.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md border border-stone-200/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-2 text-xs">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${getStatusBadge(
            idea.status,
          )}`}
        >
          📌 {idea.status}
        </span>
        <span className="text-stone-400 text-[11px]">{formattedDate}</span>
      </div>
    </div>
  )
}
