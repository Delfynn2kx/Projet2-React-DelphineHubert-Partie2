import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllCategories from './Components/AllCategories';
import Category from './Components/Category';
import Recipe from './Components/Recipe';
import './App.css';

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<AllCategories />}/>
        <Route path='/categories/:name' element={<Category />}/>
        <Route path='/meals/:id' element={<Recipe />}/>
      </Routes>
  </QueryClientProvider>
  )
}

export default App
