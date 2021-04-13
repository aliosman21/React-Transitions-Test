import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "../views/App";
import Home from "../views/home";
import Three from "../views/Three"
import Login from "../views/login";

function Routes() {
   return (
      <>
         <Route exact path="/" component={App} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/three" component={Three} />
      </>
   );
}
export default Routes;
