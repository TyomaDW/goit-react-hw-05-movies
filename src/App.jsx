import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ROUTES } from './routes';

const AsyncHomePage = lazy(() =>
  import('./components/HomePage/HomePage' /*webpackChunkName: "HomePage"*/)
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/
  )
);

const AsyncMoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage' /*webpackChunkName: "MoviesPage"*/
  )
);

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={ROUTES.HomePage} exact component={AsyncHomePage} />
        <Route path={ROUTES.MoviesPage} exact component={AsyncMoviesPage} />
        <Route
          path={ROUTES.MovieDetailsPage}
          component={AsyncMovieDetailsPage}
        />
        <Redirect to={ROUTES.HomePage} />
      </Suspense>
    </BrowserRouter>
  );
}
