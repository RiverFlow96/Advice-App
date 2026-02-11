/*
  Proyecto útil: Generador de Consejos (Advice App).

  Usa la API pública y gratuita https://api.adviceslip.com/advice.

  Al cargar la página, muestra un consejo aleatorio.

  Un botón "Dame otro consejo" que vuelva a llamar a la API.

*/

// Background: #1F2631

// Backgroun 2: #1B222B


import './App.css'

function App() {

  return (
    <>
      <div className='
        flex
        flex-col
        bg-[#1B222B]
        w-[40dvw]
        h-[40dvh]
        rounded-2xl
        p-10
        font-sans
        shadow-cyan-900
        shadow-2xl
        '
      >
        <p className='text-green-500 text-center font-bold'>Text ???</p>
        <span className='h-7'></span>
        <p className='text-white text-center font-bold'>Example Text</p>
      </div>
    </>
  )
}

export default App
