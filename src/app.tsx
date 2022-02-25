import { Dashboard } from 'pages/Dashboard'
import { Homepage } from 'pages/Homepage'
import { Routes, Route } from 'react-router-dom'
const App = () => (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
)

export { App };
