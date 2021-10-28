import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home'
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddService from './pages/AddService/AddService';
import ManageServices from './pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>

            <Route path = '/addService'>
              <AddService></AddService>
            </Route>

            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
