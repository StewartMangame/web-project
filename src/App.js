import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Routes  >
        
        <Route path='profile'  element={<profilePage/>}/>
        <Route path='markets' element={<marketsPage/>}/>
        <Route path='loans' element={<loansPage/>}/>
        <Route path='consultation' element={<consultationPage/>}/>
        <Route path='cooperatives' element={<cooperativesPage/>}/>
        <Route path='subsidy-application' element={<subsidy-applicationPage/>}/>
        


      </Routes>
      
    </div>
  );
}

export default App;
