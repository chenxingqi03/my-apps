
import React, { Component } from "react";
import { Router, Route, Switch ,Redirect} from "dva/router";

class RouterMap extends Component {
  render() {
    const { routes, history } = this.props
    const defaultRoute = (
      <Redirect from='/' to="/app/student/list" key={'default'} exact></Redirect>
    );

    const routeList = routes.filter((item)=>{
      return item.component
  })
  const redirectList  = routes.filter((item)=>{
      return !item.component
  })
    return (
      <Router history={history}>
        <Switch>
          {routeList.map((item, index) => {
            const children = item.children === undefined ? [] : item.children;
            const Comp = item.component;
            return (
              <Route
                key={item.name}
                path={item.path}
                component={() => {
                  return <Comp routes={children} history={history}></Comp>;
                }}
              />
            );
          }).concat([defaultRoute])}
          
          {
               redirectList.map((item,index)=>{
                //from重定向的起点   to重定向的终点
                return (<Redirect key={index} from={item.from} to={item.to}    />)
            })
          }
        </Switch>
      </Router>
    );
  }
}
export default RouterMap;
