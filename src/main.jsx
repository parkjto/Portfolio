import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioHero from './components/PortfolioHero.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import ProjectIndex from './components/Projectindex.jsx'
import MyBizOverview from './components/MyBizOverview.jsx'
import MyBizProblem from './components/MyBizProblem.jsx'
// import { AboutMeWrapper } from './components/AboutMeWrapper.jsx'
// import { ContainerWrapper } from './components/ContainerWrapper.jsx'
// import { Projectindex } from './components/Projectindex.jsx'
// import { FrameWrapper } from './components/FrameWrapper.jsx'
import { Closing } from './components/Closing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioHero />
    <AboutMe />
    <ProjectIndex />
    <MyBizOverview />
    <MyBizProblem />
    {/* <AboutMeWrapper />
    <ContainerWrapper />
    
    <FrameWrapper />*/}
    <Closing /> 
  </StrictMode>,
)
