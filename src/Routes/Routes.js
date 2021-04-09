import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "../views/App";
import Home from "../views/home";

function Routes() {
   const location = useLocation();
   return (
      <AnimatePresence>
         <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
         </Switch>
      </AnimatePresence>
   );
}
export default Routes;
