/*
  Proyecto útil: Generador de Consejos (Advice App).

  Usa la API pública y gratuita https://api.adviceslip.com/advice.

  Al cargar la página, muestra un consejo aleatorio.

  Un botón "Dame otro consejo" que vuelva a llamar a la API.

*/

// Background: #1F2631

// Backgroun 2: #1B222B

import './App.css'
import { useQuery } from '@tanstack/react-query'
import useStore from './Store/store'

const fetchAdvice = async () => {
  const res = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`)
  if (!res.ok) throw new Error("No se pudo llamar a la API")
  return res.json()
}

function App() {

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ['advices'],
    queryFn: fetchAdvice,
    refetchOnWindowFocus: false,
  })

  const increment = useStore((state) => state.incrementAdvice)
  const advice = useStore((state) => state.advice)

  if (isLoading) return <span className='text-white text-center font-bold'>Cargando...</span>
  if (error) return <span className='text-white text-center font-bold'>Error: {error.message}</span>

  const onClickButton = () => {
    increment()
    refetch()
  }

  return (
    <>
      <div className='
        flex
        flex-col
        bg-[#313949]
        w-[40dvw]
        h-[40dvh]
        rounded-2xl
        p-10
        font-sans
        shadow-[#283142]
        shadow-2xl
        items-center
        justify-center
        '
      >
        <p className='text-green-700 text-center font-bold text-[0.8rem]'>{advice}</p>
        <span className='h-7'></span>
        <div className='w-full h-7'>
          <p className='text-white text-center font-bold'>{data.slip.advice}</p>
        </div>
        <span className='h-7'></span>
        <button className='text-white font-bold bg-green-700 w-40 rounded-2xl hover:bg-green-800' onClick={() => onClickButton()} disabled={isFetching || isLoading}>New Advice</button>
      </div>
    </>
  )
}

export default App
