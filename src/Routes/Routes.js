import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import { Transition } from "react-transition-group";
import "../styles/pageStyles.css";
import App from "../views/App";
import Home from "../views/home";
import Three from "../views/Three";
import Login from "../views/login";

function Routes() {
   /* const defaultStyle = {
      transition: `opacity ${1500}ms ease-in-out`,
      opacity: 0,
   };
   const transitionStyles = {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
   }; */
   return (
      <>
         <Route exact path="/">
            {({ match }) => (
               /*     <Transition in={match != null} timeout={1500}>
                  {(state) => (
                     <div
                        style={{
                           ...defaultStyle,
                           ...transitionStyles[state],
                        }}>
                        <App />
                     </div>
                  )}
               </Transition> */

               <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames="Index-page"
                  unmountOnExit>
                  <div className="Index-page">
                     <App />
                  </div>
               </CSSTransition>
            )}
         </Route>

         <Route exact path="/home">
            {({ match }) => (
               <CSSTransition in={match != null} timeout={500} classNames="page1" unmountOnExit>
                  <div className="page1">
                     <Home />
                  </div>
               </CSSTransition>
            )}
         </Route>
         <Route exact path="/login">
            {({ match }) => (
               <CSSTransition in={match != null} timeout={500} classNames="page" unmountOnExit>
                  <div className="page">
                     <Login />
                  </div>
               </CSSTransition>
            )}
         </Route>
         <Route exact path="/three">
            {({ match }) => (
               <CSSTransition in={match != null} timeout={500} classNames="page" unmountOnExit>
                  <div className="page">
                     <Three />
                  </div>
               </CSSTransition>
            )}
         </Route>
      </>
      /*    <>
         <Route exact path="/" component={App} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/three" component={Three} />
      </> */
   );
}
export default Routes;
