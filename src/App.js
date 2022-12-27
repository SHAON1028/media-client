import logo from './logo.svg';
import './App.css';
import { toast } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';


function App() {
  
  return (
    <div className="">
          <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
