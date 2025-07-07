import "./App.css";
import RoutingConfig from "./RoutingConfig.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { favouratesCache } from "./functionality/favouratesSlice.js";
function App() {
  const dispatch = useDispatch();
  let favObj = useSelector((state) => state.favourates);

  useEffect(() => {
    const favs = localStorage.getItem("favourates");
    favObj = JSON.parse(favs);
    dispatch(favouratesCache(JSON.parse(favs)));
  }, []);

  return <RoutingConfig />;
}

export default App;
