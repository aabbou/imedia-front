/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Products from 'containers/Products/Loadable';
import Categories from 'containers/Categories/Loadable';

import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { GlobalModal } from '../Modal';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/categories" component={Categories} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
      <GlobalModal />
    </div>
  );
}
