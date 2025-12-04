import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import PortfolioHero from './components/PortfolioHero.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import ProjectIndex from './components/Projectindex.jsx'
import MyBizOverview from './components/MyBiz/MyBizOverview.jsx'
import MyBizProblem from './components/MyBiz/MyBizProblem.jsx'
import MyBizSolution from './components/MyBiz/MyBizSolution.jsx'
import MyBizResult from './components/MyBiz/MyBizResult.jsx'
import MyBizFlowChart from './components/MyBiz/MyBizFlowChart.jsx'
import NaruOverview from './components/Naru/NaruOverview.jsx'
import NaruProblem from './components/Naru/NaruProblem.jsx'
import NaruSolution from './components/Naru/NaruSolution.jsx'
import NaruResult from './components/Naru/NaruResult.jsx'
import NaruFlowChart from './components/Naru/NaruFlowChart.jsx'
import IgEOverview from './components/IgE/IgEOverview.jsx'
import IgEProblem from './components/IgE/IgEProblem.jsx'
import IgESolution from './components/IgE/IgESolution.jsx'
import IgELearning from './components/IgE/IgELearning.jsx'
import IgEFlowChart from './components/IgE/IgEFlowChart.jsx'
import { Closing } from './components/Closing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <PortfolioHero />
      <AboutMe />
      <ProjectIndex />
      
      <MyBizOverview />
      <MyBizFlowChart />
      <MyBizProblem />
      <MyBizSolution />
      <MyBizResult />

      <NaruOverview />
      <NaruFlowChart />
      <NaruProblem />
      <NaruSolution />
      <NaruResult />

      <IgEOverview />
      <IgEFlowChart />
      <IgEProblem />
      <IgESolution />
      <IgELearning />

      <Closing />
    </ErrorBoundary>
  </StrictMode>,
)
