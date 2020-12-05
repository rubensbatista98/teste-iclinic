import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'screens/Home';
import ForceSide from 'screens/ForceSide';

const RedirectToHome = () => <Redirect to="/" />;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/force-side" component={ForceSide} />
    <Route component={RedirectToHome} />
  </Switch>
);

export default Routes;
