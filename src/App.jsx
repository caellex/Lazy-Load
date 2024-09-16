import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { lazy } from 'react'

const NewsletterLazy = lazy(() => import('./Newsletters'))
const LoadingLazy = lazy(() => import('./Loading'))
const HomeLazy = lazy(() => import('./Home'))
const DashboardLazy = lazy(() => import('./Dashboard'))


const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newsletters">Newsletters</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      <React.Suspense fallback={<LoadingLazy />}>
        <Routes>
          <Route path="/" element={<HomeLazy />} />
          <Route path="/newsletters" element={<NewsletterLazy />} />
          <Route path="/dashboard" element={<DashboardLazy />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App;