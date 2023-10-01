import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleWordView from './components/WordPage'
import BookPages from './components/BookPages'
import Landing from './components/Landing'

function App() {
  const queryClient = new QueryClient
  return (
    <Router>
    <QueryClientProvider client={queryClient}>
    <div className='container'>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/book/:book_number/:title?' element={<BookPages />} />
          <Route path='/word/:word' element={<SingleWordView />} />
      </Routes>
    </div>
    </QueryClientProvider>
    </Router>
  )
}

export default App