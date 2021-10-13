import { Route, Switch } from 'react-router';

import './App.css';

import EmployeeList from './components/Employee/EmployeeList';
import Javapeno from './containers/Javapeno';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/employees">
            <EmployeeList />
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
