import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Team from './components/Pages/Team';
import Login from './components/Pages/Login';
import AdminWrapper from './components/AdminWrapper';

function App() {
  return (
    <Router>

      <Route 
        path="/admin"
        render={props => (
          <AdminWrapper>
            <Login />
          </AdminWrapper>
        )}
      />

      <Route 
        exact={true}
        path="/"
        render={props => (
          <PageWrapper>
            <Home {...props} />
          </PageWrapper>
        )}
      />
    
      <Route 
        path="/portfolio"
        render={props => (
          <PageWrapper>
            <Portfolio {...props} />
          </PageWrapper>
        )}
      />

      <Route 
        path="/services"
        render={props => (
          <PageWrapper>
            <Services {...props} />
          </PageWrapper>
        )}
      />

      <Route 
        path="/about"
        render={props => (
          <PageWrapper>
            <About {...props} />
          </PageWrapper>
        )}
      />

      <Route 
        path="/team"
        render={props => (
          <PageWrapper>
            <Team {...props} />
          </PageWrapper>
        )}
      />

    </Router>
  );
}

export default App;
