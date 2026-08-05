interface FooterProps {
  count: number
}

export function Footer({ count }: FooterProps) {
  return (
    <footer className="w-full border-t border-stone-200/80 bg-white/60 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-stone-500">
        <div>
          <span className="font-semibold text-stone-700">Bloquinho de Ideias</span> — Organizando
          pensamentos, criando projetos.
        </div>
        <div>
          {count} {count === 1 ? 'ideia cadastrada' : 'ideias cadastradas'} no seu caderno digital
        </div>
      </div>
    </footer>
  )
}
