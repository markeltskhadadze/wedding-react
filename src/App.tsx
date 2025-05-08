import { Theme } from '@radix-ui/themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home'
import './index.css'
import '@radix-ui/themes/styles.css'

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Theme>
    )
}

export default App
