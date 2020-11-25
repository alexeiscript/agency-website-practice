import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

//Pages
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Team from './components/Pages/Team';
import Login from './components/Pages/Login';
import AdminWrapper from './components/AdminWrapper';
import Dashboard from './components/Pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Route 
          path="/admin"
          render={props => {
            return (
              <AdminWrapper>
                {this.props.auth.token ?
                  <Dashboard />
                :
                  <Login />
                }
              </AdminWrapper>
            )
          }}
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
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
