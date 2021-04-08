import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "../views/App";
import Home from "../views/home";

function Routes() {
   return (
      <>
         <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
         </Router>
      </>
   );
}
export default Routes;
