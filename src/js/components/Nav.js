import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    
    return (
      <nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={location.pathname === "/" ? "active" : ""}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={location.pathname.match(/^\/films/) ? "active" : ""}>
                <Link to="films" onClick={this.toggleCollapse.bind(this)}>Films</Link>
              </li>
              <li class={location.pathname.match(/^\/people/) ? "active" : ""}>
                <Link to="people" onClick={this.toggleCollapse.bind(this)}>People</Link>
              </li>
              {/*<li class={location.pathname.match(/^\/planets/) ? "active" : ""}>
                <Link to="planets" onClick={this.toggleCollapse.bind(this)}>Planets</Link>
              </li>
              <li class={location.pathname.match(/^\/species/) ? "active" : ""}>
                <Link to="species" onClick={this.toggleCollapse.bind(this)}>Species</Link>
              </li>
              <li class={location.pathname.match(/^\/starships/) ? "active" : ""}>
                <Link to="starships" onClick={this.toggleCollapse.bind(this)}>Starships</Link>
              </li>
              <li class={location.pathname.match(/^\/vehicles/) ? "active" : ""}>
                <Link to="vehicles" onClick={this.toggleCollapse.bind(this)}>Vehicles</Link>
              </li>*/}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
