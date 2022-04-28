const { NavLink } = ReactRouterDOM;
import { eventBusService } from '../../services/event-bus-service.js';
class SideNav extends React.Component {
  render() {
    return (
      <nav className="side-nav">
        <NavLink className="inbox" to="/" exact>
          Inbox
        </NavLink>
        <NavLink className="starred" to="/starred">
          Starred
        </NavLink>
        <NavLink className="sent" to="/sent">Sent</NavLink>
        <NavLink className="drafts">Drafts</NavLink>
        <NavLink className="trash" to="/trashed">Trash</NavLink>
      </nav>
    );
  }
}

export default SideNav;
