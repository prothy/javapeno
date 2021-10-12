import { Route, Switch } from 'react-router';

import './App.css';

import Employee from './components/Employee/Employee';
import Javapeno from './containers/Javapeno';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/employees">
            <Employee />
          </Route>
          <Route path="/">
            <Javapeno />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
