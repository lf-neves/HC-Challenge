import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'

const Home = lazy(() =>
  import('./pages/Home').then((module) => ({
    default: module.Home,
  }))
)


const AppRouting = () => {
  const routing = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <Navigate to="/home" />
        </Suspense>
      ),
    },
    {
      path: '/home',
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <Home />
        </Suspense>
      ),
    }
  ])

  return routing
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  )
}
