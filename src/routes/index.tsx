import {
  BrowserRouter,
  Routes as Switch, // instead of "Switch"
  Route,
} from "react-router-dom";
import { Continente } from "../pages/Continente";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/continente/:continent" element={<Continente />} />
      </Switch>
    </BrowserRouter>
  );
}
