import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddService from './components/Admin/AddService/AddService';
import ManageOrder from './components/Admin/ManageOrder/ManageOrder';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrder from './components/MyOrder/MyOrder';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import './App.css';
import Booking from './components/Booking/Booking';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/service/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/admin/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/admin/manageOrders'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
