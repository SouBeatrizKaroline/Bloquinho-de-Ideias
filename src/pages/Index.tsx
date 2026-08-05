import { useState, useEffect, useMemo } from 'react'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { CategoryFilters } from '@/components/CategoryFilters'
import { AddIdeaForm } from '@/components/AddIdeaForm'
import { IdeaGrid } from '@/components/IdeaGrid'
import { Footer } from '@/components/Footer'
import { Idea } from '@/types/idea'
import {
  fetchIdeasFromPB,
  createIdeaService,
  toggleFavoriteService,
  deleteIdeaService,
  clearAllIdeasService,
} from '@/services/ideas'

export default function Index() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  useEffect(() => {
    fetchIdeasFromPB().then(setIdeas)
  }, [])

  const handleAddIdea = async (newIdeaData: Omit<Idea, 'id' | 'createdAt'>) => {
    const created = await createIdeaService(newIdeaData)
    setIdeas((prev) => [created, ...prev])
  }

  const handleToggleFavorite = async (id: string, current: boolean) => {
    setIdeas((prev) => prev.map((i) => (i.id === id ? { ...i, favorite: !current } : i)))
    await toggleFavoriteService(id, current)
  }

  const handleDelete = async (id: string) => {
    setIdeas((prev) => prev.filter((i) => i.id !== id))
    await deleteIdeaService(id)
  }

  const handleClearAll = async () => {
    setIdeas([])
    await clearAllIdeasService()
  }

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.category.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory =
        selectedCategory === 'Todos' ||
        idea.category.toLowerCase().includes(
          selectedCategory
            .toLowerCase()
            .replace(/^[^\w\s]+/, '')
            .trim(),
        )

      return matchesSearch && matchesCategory
    })
  }, [ideas, searchTerm, selectedCategory])

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7] text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:py-8">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          count={filteredIdeas.length}
          totalCount={ideas.length}
          onClearAll={handleClearAll}
        />

        <CategoryFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <AddIdeaForm onAddIdea={handleAddIdea} />

        <IdeaGrid
          ideas={filteredIdeas}
          totalIdeasCount={ideas.length}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onToggleFavorite={handleToggleFavorite}
          onDelete={handleDelete}
        />

        {/* Marker for static reference */}
        {/* ADICIONE NOVAS IDEIAS AQUI */}
      </main>

      <Footer count={ideas.length} />
    </div>
  )
}
