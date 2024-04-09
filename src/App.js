import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Preloader, ScrollToTop } from './components';
import { Footer, Navbar } from './layouts/components';
import { route, routes } from './routes/routes';
import './style.css';
import { Navigate } from 'react-router-dom';

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<Preloader load={load} />}>
                <Preloader load={load} />
                <div className='App' id={load ? 'no-scroll' : 'scroll'}>
                    <Navbar />
                    <ScrollToTop />
                    <Routes>
                        {routes.map((route, key) => {
                            const Page = route.element;
                            return <Route key={key} path={route.path} element={<Page />} />;
                        })}
                        <Route path='*' element={<Navigate to={route.home} replace />} />
                    </Routes>
                    <Footer />
                </div>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
