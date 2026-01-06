import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { ScrambleWords } from './05-useReducer/ScrambleWords'
import { MemoHook } from './06-memos/MemoHook'
//import { FocusScreen } from './03-useRef/FocusScreen'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { TasksApp } from './05-useReducer/TaskApp'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'

//import { TrafficLight } from './01-useState/TrafficLight'
//import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<HooksApp/>*/}
    {/*<TrafficLight/>*/}
    {/*<TrafficLightWithEffect/>*/}
    {/*<TrafficLightWithHook/>*/}
    {/*<PokemonPage/>*/}
    {/*<FocusScreen/>*/}
    {/*<TasksApp/>*/}
    {/*<ScrambleWords/>*/}
    <MemoHook/>
  </StrictMode>,
)
