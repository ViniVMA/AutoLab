import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
// import { DashBoard } from './pages/DashBoard';
// import { AllVehicles } from './pages/AllVehicles';
// import { MyVehicles } from './pages/MyVehicles'
// import { Employees } from './pages/Employees'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          {/* <Route path="/admin/dashboard" component={DashBoard} />
          <Route path="/admin/all-vehicles" component={AllVehicles} />
          <Route path="/admin/my-vehicles" component={MyVehicles} />
          <Route path="/admin/employees" component={Employees} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
