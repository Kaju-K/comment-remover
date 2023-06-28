import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

import { createContext, useState } from 'react';

import Navigation from './components/Navigation';
import ErrorPage from './pages/ErrorPage';
import ReadFile from './pages/ReadFile';
import Output from './pages/Output';


const router = createBrowserRouter([
  {
    element: (
      <>
        <Navigation />
        <main className='main'>
          <Outlet />
        </main>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/read-file',
        element: <ReadFile />
      },
      {
        path: '/output',
        element: <Output />
      }
    ]
  }
])

export const TextContext = createContext(null)

function App() {
  const [texts, setTexts] = useState([])

  return (
    <TextContext.Provider value={{texts, setTexts}}>
      <RouterProvider router={router} />
    </TextContext.Provider>
  );
}

export default App;
