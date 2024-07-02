import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// pages
import { Home } from './pages/Home'
import { About } from './pages/About'
import  Faq  from './pages/help/Faq'
import  Contact  from './pages/help/Contact'

//layout
import { RootLayout } from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} /> {/* INDEX PATH */}
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        {/* /help/faq  /help/contact */}
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
