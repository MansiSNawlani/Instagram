import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/app.css';

const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

// client side  rendered app: react(create-react-app)
// database => Firebase
// ext. dependencies => react-loading-skeleton
//                     Tailwind

// folder structure
// => src
// components,
// constants,
// helpers,
// hooks,
// pages
// lib(firebase here),
// services(firebase functions in here)
// styles (tailwind's folder(app/tailwind))

// ----------to be used later ------------

// Production rules
// rules_version='2'
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read;
//       allow write: if request.auth.uid != null;
//     }
//   }
// }
