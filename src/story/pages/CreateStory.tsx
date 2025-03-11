import { Link } from "react-router";
import { PageContainer } from "../../components/page/PageContainer";
import { PageHeader } from "../../components/page/PageHeader";

export default function CreateStory() {
  return (
    <PageContainer>
      <PageHeader title="Crear Nueva Historia" backTo="/creador-historias" />

      <div className="max-w-2xl mx-auto">
        <form className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1">
                Título
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="El título de tu historia"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Describe tu historia..."
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Historia
              </label>
              <select
                id="type"
                name="type"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Selecciona un tipo</option>
                <option value="oneshot">One-Shot</option>
                <option value="campaign">Campaña</option>
                <option value="sidequest">Misión Secundaria</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Link
                to="/creador-historias"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Cancelar
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
                Crear Historia
              </button>
            </div>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}
