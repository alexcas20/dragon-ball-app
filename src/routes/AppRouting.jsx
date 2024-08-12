import { Route, Routes } from "react-router-dom"
import {Characters} from '../pages/Characters/Characters'
import {Planets} from '../pages/Planets/Planets'
import {Favs} from '../pages/Favs/Favs'



export const AppRouting = () => {
  return (
<>

    <Routes>

        <Route path="/" element={<Characters/>}/>
        <Route path="characters" element={<Characters/>}/>
        <Route path="planets" element={<Planets/>}/>
        <Route path="favs" element={<Favs/>}/>



    </Routes>

</>
  )
}
