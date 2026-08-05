import { useState } from 'react'
import { PlusCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CATEGORIES, STATUS_OPTIONS, Idea, IdeaStatus } from '@/types/idea'

interface AddIdeaFormProps {
  onAddIdea: (idea: Omit<Idea, 'id' | 'createdAt'>) => Promise<void>
}

export function AddIdeaForm({ onAddIdea }: AddIdeaFormProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(`${CATEGORIES[0].emoji} ${CATEGORIES[0].label}`)
  const [description, setDescription] = useState('')
  const [objective, setObjective] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [status, setStatus] = useState<IdeaStatus>('Ideia Inicial')

  const [titleError, setTitleError] = useState(false)
  const [descError, setDescError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false

    if (!title.trim()) {
      setTitleError(true)
      hasError = true
    } else {
      setTitleError(false)
    }

    if (!description.trim()) {
      setDescError(true)
      hasError = true
    } else {
      setDescError(false)
    }

    if (hasError) return

    setIsSubmitting(true)
    try {
      await onAddIdea({
        title: title.trim(),
        category,
        description: description.trim(),
        objective: objective.trim(),
        technologies: technologies.trim(),
        status,
        favorite: false,
      })

      // Reset Form
      setTitle('')
      setCategory(`${CATEGORIES[0].emoji} ${CATEGORIES[0].label}`)
      setDescription('')
      setObjective('')
      setTechnologies('')
      setStatus('Ideia Inicial')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-purple-100 p-5 sm:p-6 mb-8 shadow-elevation transition-all">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
        <span className="text-xl">✨</span>
        <h2 className="text-lg font-bold text-slate-900">Adicionar nova ideia</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Nome da ideia <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Ex: App de Receitas Inteligentes"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (e.target.value.trim()) setTitleError(false)
              }}
              className={`h-10 text-sm ${titleError ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-200'}`}
            />
            {titleError && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Preencha o nome da ideia.
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-10 px-3 bg-white border border-stone-200 rounded-md text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={`${cat.emoji} ${cat.label}`}>
                  {cat.emoji} {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Descrição <span className="text-red-500">*</span>
          </label>
          <Textarea
            rows={2}
            placeholder="Descreva brevemente o que é este projeto e como ele funciona..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
              if (e.target.value.trim()) setDescError(false)
            }}
            className={`text-sm ${descError ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-200'}`}
          />
          {descError && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Preencha a descrição.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Objetivo</label>
            <Input
              type="text"
              placeholder="Ex: Resolver a falta de tempo..."
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="h-10 text-sm border-stone-200"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Tecnologias</label>
            <Input
              type="text"
              placeholder="Ex: React, Node, Tailwind"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              className="h-10 text-sm border-stone-200"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as IdeaStatus)}
              className="w-full h-10 px-3 bg-white border border-stone-200 rounded-md text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {STATUS_OPTIONS.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800 text-white font-semibold h-11 px-6 rounded-xl shadow-sm gap-2 transition-transform active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            Adicionar Ideia 💡
          </Button>
        </div>
      </form>
    </div>
  )
}
