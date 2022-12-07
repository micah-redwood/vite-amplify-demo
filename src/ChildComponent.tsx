import React from 'react';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

export default function ChildComponent() {
  const { user, route } = useAuthenticator((c) => [c.route, c.user]);
  console.log("user :>> ", user);
  console.log("route :>> ", route);

  return (
    <div>
      <h1>Login here:</h1>
      <Authenticator hideSignUp={true} />
    </div>
  );
}
