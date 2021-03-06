import React from 'react';
import { Router } from '@reach/router';

import SignIn from '../../pages/signIn/SignIn.page';
import SignUp from '../../pages/signUp/SignUp.page';
import Dashboard from '../../pages/dashboard/Dashboard.page';
import Source from '../../pages/source/Source.page';
import Analyze from '../../pages/analyze/Analyze.page';
import MainPage from '../../pages/main/Main.page';
import RSData from '../../pages/RSData/RSData.page';
import HotelFeatures from '../../pages/hotelFeatures/HotelFeatures.page';

import PublicRoute from './PublicRoute/PublicRoute.container';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.container';

const RootRouter = () => (
  <Router>
    <PublicRoute path="/" default component={MainPage} />
    <PublicRoute path="/sign-in" component={SignIn} />
    <PublicRoute path="/sign-up" component={SignUp} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
    <ProtectedRoute path="/source" component={Source} />
    <ProtectedRoute path="/ranking" component={Analyze} />
    <ProtectedRoute path="/rs" component={RSData} />
    <ProtectedRoute path="/features" component={HotelFeatures} />
  </Router>
);

export default RootRouter;
