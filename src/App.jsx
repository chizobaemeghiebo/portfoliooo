import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
