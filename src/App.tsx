import './App.css';

import { Auth } from 'aws-amplify';
import { useState } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';

import { awsAuthConfig } from './amplify-auth';
import reactLogo from './assets/react.svg';
import ChildComponent from './ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  // Log these values to make sure everything is working as expected
  console.log("awsAuthConfig :>> ", awsAuthConfig);
  console.log("Auth :>> ", Auth);

  return (
    <Authenticator.Provider>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <ChildComponent />
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Authenticator.Provider>
  );
}

export default App;
