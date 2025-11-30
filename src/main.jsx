import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioHero from './components/PortfolioHero.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import ProjectIndex from './components/Projectindex.jsx'
import MyBizOverview from './components/MyBiz/MyBizOverview.jsx'
import MyBizProblem from './components/MyBiz/MyBizProblem.jsx'
import MyBizSolution from './components/MyBiz/MyBizSolution.jsx'
import MyBizResult from './components/MyBiz/MyBizResult.jsx'
import MyBizFlowChart from './components/MyBiz/MyBizFlowChart.jsx'
import { Closing } from './components/Closing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioHero />
    <AboutMe />
    <ProjectIndex />
    <MyBizOverview />
    <MyBizFlowChart />
    <MyBizProblem />
    <MyBizSolution />
    <MyBizResult />

    <Closing /> 
  </StrictMode>,
)
