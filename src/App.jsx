import { useState } from "react";

const languages = [
  {
    name: "Português",
    code: "pt-BR",
  },
  {
    name: "Inglês",
    code: "en-US",
  },
  {
    name: "Espanhol",
    code: "es-ES",
  },
  {
    name: "Francês",
    code: "fr-FR",
  },
  {
    name: "Alemão",
    code: "de-DE",
  },
  {
    name: "Italiano",
    code: "it-IT",
  },
];

function App() {
  const [sourceLang, setSourceLang] = useState("pt-BR");
  const [targetLang, setTargetLang] = useState("en-US");

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/70">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center px-4 py-3">
          <h1 className="text-2xl font-normal text-gray-800">Tradutor</h1>
        </div>
      </header>

      <main className="flex flex-grow items-start justify-center px-4 py-8">
        <div className="w-full max-w-5xl overflow-hidden rounded-lg bg-white drop-shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="cursor-pointer border-none bg-transparent text-sm text-gray-600 focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button className="rounded-full p-2 outline-none hover:bg-gray-100">
              <svg
                className="text-headerColor h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="cursor-pointer border-none bg-transparent text-sm text-gray-600 focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4">
              <textarea
                placeholder="Digite o texto aqui..."
                className="h-40 w-full resize-none border-none bg-transparent text-lg text-gray-800 outline-none"
                name=""
                id=""
              ></textarea>
            </div>
            <div className="relative border-l border-gray-200 bg-gray-100 p-4">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-gray-900"></div>

                <p className="text-lg text-gray-800">Olá mundo</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center border-t border-gray-200 bg-white py-3 text-sm font-normal text-gray-500">
        &copy; {new Date().getFullYear()} Tradutor
      </footer>
    </div>
  );
}

export default App;
