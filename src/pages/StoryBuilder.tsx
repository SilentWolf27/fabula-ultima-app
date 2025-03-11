export default function StoryBuilder() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-medieval text-gray-900 mb-2">
          Creador de Historias
        </h1>
        <p className="text-gray-600 text-sm">
          Crea y gestiona las historias de tu campaña
        </p>
      </header>

      <main className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid gap-6">
          {/* Aquí irán los componentes del creador de historias */}
          <div className="text-gray-500 text-center py-12">
            <p>Próximamente...</p>
          </div>
        </div>
      </main>
    </div>
  );
} 