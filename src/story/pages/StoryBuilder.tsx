import { Link } from "react-router";
import { PageContainer } from "../../components/page/PageContainer";
import { PageHeader } from "../../components/page/PageHeader";

export default function StoryBuilder() {
  return (
    <PageContainer>
      <PageHeader title="Creador de Historias">
        <Link
          to="/creador-historias/crear"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Nueva Historia
        </Link>
      </PageHeader>

      <div className="grid gap-6">
        {/* Aquí irán los componentes del creador de historias */}
        <div className="text-gray-500 text-center py-12 bg-white rounded-lg shadow-sm">
          <p>No hay historias creadas aún</p>
          <p className="text-sm mt-2">Comienza creando una nueva historia</p>
        </div>
      </div>
    </PageContainer>
  );
}
