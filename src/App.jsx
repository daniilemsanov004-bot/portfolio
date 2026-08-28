import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* All content lives on the single-page Home layout (#home, #projects,
            #services, #about, #contact anchors). Any other/old path just
            redirects back to "/" so bookmarked or typed links never 404. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
