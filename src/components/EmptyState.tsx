import { Sparkles, SearchX } from 'lucide-react'

interface EmptyStateProps {
  type: 'no-ideas' | 'no-results'
  searchTerm?: string
  categoryFilter?: string
}

export function EmptyState({ type, searchTerm, categoryFilter }: EmptyStateProps) {
  if (type === 'no-ideas') {
    return (
      <div className="bg-white rounded-2xl border border-stone-200/80 p-10 text-center shadow-subtle my-8">
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
          <Sparkles className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Nenhuma ideia por aqui ainda</h3>
        <p className="text-sm text-stone-500 max-w-md mx-auto">
          Adicione a primeira ideia no formulário acima para começar o seu caderno digital! ✨
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-10 text-center shadow-subtle my-8">
      <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">Nenhuma ideia encontrada</h3>
      <p className="text-sm text-stone-500 max-w-md mx-auto">
        Não encontramos resultados para
        {searchTerm ? ` "${searchTerm}"` : ''}
        {categoryFilter && categoryFilter !== 'Todos' ? ` na categoria ${categoryFilter}` : ''}. 🧐
      </p>
    </div>
  )
}
