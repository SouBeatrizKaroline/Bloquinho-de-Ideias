export function Header() {
  const floatingEmojis = ['💡', '🧠', '✨', '📝', '🗒️']

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/80 border-b border-stone-200/60 transition-all duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center justify-center sm:justify-start gap-2">
            <span>💡</span> Bloquinho de Ideias
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
            Um espaço para guardar ideias e transformar pensamentos em projetos.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-purple-50/80 border border-purple-100/80 px-3.5 py-1.5 rounded-full shadow-inner">
          {floatingEmojis.map((emoji, idx) => (
            <span
              key={idx}
              className="text-lg animate-float inline-block select-none transition-transform hover:scale-125"
              style={{ animationDelay: `${idx * 0.4}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
