import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router';
import Home from '../components/home/home';
import HomeFooter from '../components/home/home-footer/home-footer';
import HomeHeader from '../components/home/home-header/home-header';
import ContentLoader from '../components/shared/content-loader/content-loader';
import { AppPrefix } from '../util/app-constants';
import JSRoutes from './js-routes';
import ReactRoutes from './react-routes';

const AppRouter = () => {
  return (
    <Suspense fallback={<ContentLoader />}>
      <HomeHeader />
      <div className={`${AppPrefix}-content-section`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/javascript/*' element={<JSRoutes />} />
          <Route path='/react/*' element={<ReactRoutes />} />
          <Route path='*' element={<p>There's nothing here!</p>} />
        </Routes>
      </div>
      <HomeFooter />
    </Suspense>
  );
};

export default AppRouter;