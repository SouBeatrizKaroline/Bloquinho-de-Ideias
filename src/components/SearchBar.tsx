import { Search, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  count: number
  totalCount: number
  onClearAll: () => void
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  count,
  totalCount,
  onClearAll,
}: SearchBarProps) {
  const handleClearConfirm = () => {
    if (
      window.confirm(
        'Tem certeza que deseja apagar todas as ideias? Esta ação não pode ser desfeita.',
      )
    ) {
      onClearAll()
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200/80 shadow-subtle">
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
        <Input
          type="text"
          placeholder="Pesquisar ideias..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 h-11 bg-stone-50/60 border-stone-200 focus-visible:ring-2 focus-visible:ring-purple-600 rounded-xl text-sm"
        />
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200/60">
          {count} {count === 1 ? 'ideia' : 'ideias'}
          {count !== totalCount && <span className="ml-1 opacity-75"> (de {totalCount})</span>}
        </span>

        {totalCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearConfirm}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs gap-1.5 h-9 rounded-xl font-medium"
            title="Limpar todas as ideias"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Limpar tudo
          </Button>
        )}
      </div>
    </div>
  )
}
