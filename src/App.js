import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetupPage from "./pages/NewMeetupPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/' >
          <AllMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
