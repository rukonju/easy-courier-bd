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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import './App.css';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/home'>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/services'>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/service/booking/:id'>
              <Booking></Booking>
              <Footer></Footer>
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
            <Route>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
          </Switch>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
