import React from 'react'
import { Router, Route , IndexRedirect } from 'dva/router'
import {
  App,
  Error,
  Downwind,
  Me,
  Stroke,
  DownwindContentShow
} from './routes'

export default function ({ history }) {
  return (
    <Router history={ history }>
      <Route path="/" component={ App } >
        <IndexRedirect to="/Downwind" />
        <Route path="/Downwind" component={ Downwind }/>
        <Route path="Content/Show" component={ DownwindContentShow }/>
        <Route path="/Me" component={ Me } />
        <Route path="/Stroke" component={ Stroke } />
        <Route path="*" component={ Error } />
      </Route>
    </Router>
  )
}
