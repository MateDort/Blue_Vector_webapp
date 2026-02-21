import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import BoatDetail from './pages/BoatDetail.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/boat/:id" element={<BoatDetail />} />
        </Routes>
    )
}

export default App
