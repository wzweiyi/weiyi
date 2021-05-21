import React, { FC } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { RouterItem } from '../types'

interface RouterProps {
  routes: Array<RouterItem>
}

const RouterView:FC<RouterProps> = ({ routes }) => {
  if(!routes) {
    return null;
  }

  const routers = routes.filter(item => item.component);

  const redirects = routes.filter(item => !item.component);

  return (<Switch>
    {
      routers.map((item, index) => {
        return <Route key={index} path={item.path} render={routerProps => {

          if(!sessionStorage.getItem('token') && item.path != '/login') {
            return <Redirect from='/' to='/login' />
          }

          if(item.children) {
            return <item.component { ...routerProps } routes={item.children} />
          }
          return <item.component { ...routerProps } />
        }}/>
      })
    }
    {
      redirects.map((item, index) => {
        return <Redirect key={index} from={item.from} to={(item.to as string)} />
      })
    }
  </Switch>)
}

export default RouterView;
