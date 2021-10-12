import {react, useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, Footer, Addfood, Needhelp, Login, Register, Map, Refresh, Ngo, Location, Resume, Demo, Treat, Govtschemes, Donate , Aboutus  } from './components';

function App() {

  const [authentication, setAuthentication] = useState(false)

  useEffect(() => {
    loadAuth();
  }, []);

const loadAuth = async () => {
  const authtoken = sessionStorage.getItem('token')
  if(authtoken==null){
    setAuthentication(false)
  }
  else{
    setAuthentication(true)
  }
}

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header auth={authentication}/>
            <Home />
            <Location />
            <Footer />
          </Route>

          <Route exact path="/addfood">
            <Header auth={authentication}/>
            <Addfood />
            {/* <Footer /> */}
          </Route>

          <Route exact path="/needhelp">
            <Header auth={authentication}/>
            <Needhelp />
            <div className="space"></div>
            <Footer />
          </Route>

          <Route exact path="/donate">
            <Header auth={authentication}/>
            <Donate />
            <Footer />
          </Route>

          <Route exact path="/ngos">
            <Header auth={authentication}/>
            <Ngo />
            <Footer />
          </Route>

          <Route exact path="/govtschemes">
            <Header auth={authentication}/>
            <Govtschemes />
            <Footer />
          </Route>

          <Route exact path="/treat">
            <Header auth={authentication}/>
            <Treat />
            <Footer />
          </Route>

          <Route exact path="/aboutus">
            <Header auth={authentication}/>
            <Aboutus />
            <Footer />
          </Route>

          <Route exact path="/"><Header />
          </Route>

          <Route exact path="/Login"><Login /></Route>
          <Route exact path="/Register"><Register /></Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;
