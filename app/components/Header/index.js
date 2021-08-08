import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/products">
          <FormattedMessage {...messages.products} />
        </HeaderLink>
        <HeaderLink to="/categories">
          <FormattedMessage {...messages.categories} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
