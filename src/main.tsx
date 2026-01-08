import { Toaster } from 'sonner'

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'
//import { ScrambleWords } from './05-useReducer/ScrambleWords'
//import { MemoHook } from './06-memos/MemoHook'
//import { MemoCounter } from './06-memos/MemoCounter'
//import { InstagromApp } from './07-useOptimistic/InstagramApp'
//import { FocusScreen } from './03-useRef/FocusScreen'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { TasksApp } from './05-useReducer/TaskApp'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'

//import { TrafficLight } from './01-useState/TrafficLight'
//import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/*<HooksApp/>*/}
    {/*<TrafficLight/>*/}
    {/*<TrafficLightWithEffect/>*/}
    {/*<TrafficLightWithHook/>*/}
    {/*<PokemonPage/>*/}
    {/*<FocusScreen/>*/}
    {/*<TasksApp/>*/}
    {/*<ScrambleWords/>*/}
    {/*<InstagromApp/>*/}
    <Suspense
      fallback={
      <div className="gb-gradient flex flex-col">
        <h1 className='text-2xl'>Cargando</h1>
        </div>
    }
    />
      <ClientInformation getUser={getUserAction(1000)}/>
    <Suspense />
  </StrictMode>,
)
