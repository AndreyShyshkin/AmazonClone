import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Login from "./Login";
import { auth } from "./firebase";
import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe(
    "pk_test_51LefurFOTSrnNV3iCIii9GevQ1KqTcgEhyatb8f8SBmybMnhGEo6PQxXLsa1pEg1exr6jf3VTTMmcdqcUP9X0e0C00iscHHZMX    "
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...

        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);

            if (authUser) {
                // the user just logged in / the user was logged in

                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);


  return (
      <Router>
          <div className="app">
              <Routes>
                  <Route path="/orders" element={<><Header/><Orders /></>} />
                  <Route path="/login" element={<><Header/><Login /></>} />
                  <Route path="/checkout" element={<><Header/><Checkout/></>} />

                  <Route path="/payment" element={<><Header/>
                      <Elements stripe={promise}>
                          <Payment/>
                      </Elements>
                  </>} />
                  <Route path="/" element={<><Header/><Home/></>}  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
