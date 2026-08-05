import { CATEGORIES } from '@/types/idea'

interface CategoryFiltersProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategoryFilters({ selectedCategory, onSelectCategory }: CategoryFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
        <button
          type="button"
          onClick={() => onSelectCategory('Todos')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap snap-start shadow-sm border ${
            selectedCategory === 'Todos'
              ? 'bg-purple-700 text-white border-purple-700 shadow-md scale-105'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
          }`}
        >
          ✨ Todos
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected =
            selectedCategory === `${cat.emoji} ${cat.label}` || selectedCategory === cat.label
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(`${cat.emoji} ${cat.label}`)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap snap-start shadow-sm border ${
                isSelected
                  ? `${cat.chipActive} border-transparent shadow-md scale-105`
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
