import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardWrapper from './components/UI/DashboardWrapper';
import ViewClient from './pages/ViewPage/ViewClient';
import AddClient from './pages/AddClient/AddClient';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Nunito Sans, sans-serif',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LoginPage />} />

        <Route element={<DashboardWrapper />}>
          <Route exact path='dashboard/viewClient' element={<ViewClient />} />
          <Route path='dashboard/addClient' element={<AddClient />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
