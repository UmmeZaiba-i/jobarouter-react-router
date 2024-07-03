import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// pages
import { Home } from './pages/Home'
import { About } from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact' 
import NotFound from './pages/NotFound'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareerError from './pages/careers/CareerError'

//layout
import { RootLayout } from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} /> {/* INDEX PATH */}
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>         {/* /help/faq  /help/contact */}
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='careers' element={<CareersLayout />} errorElement={<CareerError/>}>
        <Route
          index element={<Careers />}
          loader={careersLoader}// errorElement={<CareerError/>} instead of duplicating then we can go for other solution 
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          // errorElement={<CareerError/>}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
