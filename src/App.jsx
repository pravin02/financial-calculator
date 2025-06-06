import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import About from './components/about/About'
import FinCalMenu from './menu/FinCalMenu';


import SystematicInvestmentPlan from './mutualfunds/SystematicInvestmentPlan';
import SystematicWithdrawalPlan from './mutualfunds/SystematicWithdrawalPlan';
import EquityLinkedSavingScheme from './mutualfunds/ells';

function App() {


  return (
    <>
      <div className='sidebar'>
        <FinCalMenu />
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mf/ells" element={<EquityLinkedSavingScheme />} />
          <Route path="/mf/sip" element={<SystematicInvestmentPlan />} />
          <Route path="/mf/swp" element={<SystematicWithdrawalPlan />} />
        </Routes>
      </div>
    </>
  )
}

export default App
