import React, {Component} from "react";
import _Aux from "../../hoc/_Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component{

  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = ()=>{
this.setState({showSideDrawer:false})
  }
  sideDrawerToggleHandler = ()=>{

    this.setState((prevState)=>{
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }
  render(){
    return(
  <_Aux>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>{this.props.children}</main>
  </_Aux>
    )
  }
};

export default Layout;
