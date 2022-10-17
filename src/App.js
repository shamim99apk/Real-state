import { Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Test';

import Details from './components/Details';

function App() {
    return (
        <>
            
            <Routes>
                <Route path='/' element={<Test />} />
                <Route path='/details' element={<Details />} />
            </Routes>
        </>
    );
}

export default App;
