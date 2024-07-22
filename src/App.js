import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Stories from './components/Stories';
import CreateStories from './components/CreateStories';
import About from './components/About';
import Signup from './components/Signup';
import Signin from './components/Signin';
import RootLayout from './components/RootLayout';
import Error from './components/Error';
import ExpandStory from './components/ExpandStory';
import { isSignIn } from './util/checkAuth';
const router = createBrowserRouter([
  { path: '/', element: <Signup /> },
  { path: 'signup', element: <Signup /> },
  { path: 'signin', element: <Signin /> },
  {
    // 
    path: '/dashboard', loader: isSignIn, element: <RootLayout />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'stories', element: <Stories /> },
      { path: 'createstory', element: <CreateStories /> },
      { path: 'about', element: <About /> },
      { path: 'expandstory/:id', element: <ExpandStory /> }
    ]
  },
  { path: 'error', element: <Error /> }
])
function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
