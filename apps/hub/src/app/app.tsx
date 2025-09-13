import { useEffect } from 'react';
import { client, orpc } from '../libs/client';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export function App() {
  const getOneQuery = useQuery(
    orpc.planet.find.queryOptions({
      input: {
        id: 1,
      },
    })
  );

  const test = async () => {
    // const data = await client.planet.find({
    //   id: 1,
    // });
    // console.log(data);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <pre>
        {getOneQuery.status === 'success' &&
          JSON.stringify(getOneQuery.data, null, 2)}
      </pre>
      <NxWelcome title="@enterprise/hub" />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
