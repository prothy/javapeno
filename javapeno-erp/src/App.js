import './App.css';
import Javapeno from './containers/Javapeno';
import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';

function App() {
  return (
    <Aux>
      <Layout>
        <Javapeno />
      </Layout>
    </Aux>
  );
}

export default App;
