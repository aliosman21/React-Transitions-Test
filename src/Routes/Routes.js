import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "../views/App";
import Home from "../views/home";

import Login from "../views/login";

function Routes() {
   return (
      <>
         <Route exact path="/" component={App} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/login" component={Login} />
      </>
   );
}
export default Routes;
