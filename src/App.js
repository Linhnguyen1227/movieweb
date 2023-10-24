import 'swiper/css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import PublicRouter from './config/Routers';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {PublicRouter.map((route, index) => {
                    return <Route key={index} path={route.path} Component={route.component} />;
                })}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
