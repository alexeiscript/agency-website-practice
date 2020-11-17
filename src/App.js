import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Team from './components/Pages/Team';

function App() {
  return (
    <Router>
      <PageWrapper>
        
          <Route 
            exact={true}
            path="/"
            component={Home}
          />
        
          <Route 
            path="/portfolio"
            component={Portfolio}
          />

          <Route 
            path="/services"
            component={Services}
          />

          <Route 
            path="/about"
            component={About}
          />

          <Route 
            path="/team"
            component={Team}
          />

      </PageWrapper>
    </Router>
  );
}

export default App;
