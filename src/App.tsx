import { Title } from '@solidjs/meta';
import { Loading } from 'solid-js';
import { paths, Router } from './router';
import './App.scss';

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>Add095</Title>
          <nav>
            <a href={paths()}>Home</a>
            <a href={paths.users(1)}>Users</a>
            <a href="youtube.com">Instagram</a>
          </nav>
          <Loading fallback={<main>Loading…</main>}>{props.children}</Loading>
        </>
      )}
    </Router>
  );
}
