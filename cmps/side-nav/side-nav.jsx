const { NavLink } = ReactRouterDOM;
import EmailCompose from '../compose/email-compose.jsx';
import { eventBusService } from '../../services/event-bus-service.js';
class SideNav extends React.Component {
  state = {
    isComposeOpen: false,
  };

  setTrue = () => {
    this.setState((prevState) => ({
      ...prevState,
      isComposeOpen: !prevState.isComposeOpen,
    }));
  };
  render() {
    return (
      <div>
        <button className="compose-btn-container" onClick={this.setTrue}>
          <img src="../../assets/imgs/plus.png" />
          <div>Compose</div>
        </button>

        {this.state.isComposeOpen && <EmailCompose setTrue={this.setTrue} />}
        <nav className="side-nav">
          <NavLink className="inbox" to="/" exact>
            Inbox
          </NavLink>
          <NavLink className="starred" to="/starred">
            Starred
          </NavLink>
          <NavLink className="sent" to="/sent">
            Sent
          </NavLink>
          <NavLink className="drafts">Drafts</NavLink>
          <NavLink className="trash" to="/trashed">
            Trash
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default SideNav;
