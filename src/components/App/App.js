import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from '../AppBar/AppBar';

const HomePageView = lazy(() =>
  import('../../views/HomePageView' /*webpackChunkName: "HomePageView" */)
);
const MoviesPageView = lazy(() =>
  import('../../views/MoviesPageView' /*webpackChunkName: "MoviesPageView" */)
);
const MovieDetails = lazy(() =>
  import('../../views/MovieDetails' /*webpackChunkName: "MovieDetails" */)
);
const NotFoundView = lazy(() =>
  import('../../views/NotFoundView' /*webpackChunkName: "NotFoundView" */)
);

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
