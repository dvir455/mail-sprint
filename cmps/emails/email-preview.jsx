const { Link } = ReactRouterDOM;
import { emailService } from '../../services/email.service.js';
import { eventBusService } from '../../services/event-bus-service.js';
class EmailPreview extends React.Component {
  state = {
    isStared: this.props.isStared,
    isTrashed: this.props.isTrashed,
    isShowButtons: false,
  };

  toggleShowButtons(bool) {
    this.setState((prevState) => ({
      ...prevState,
      isShowButtons: bool,
    }));
  }

  render() {
    const { body, subject, from, id, isStared } = this.props;
    return (
      <article
        className="email-preview"
        onMouseEnter={() => this.toggleShowButtons(true)}
        onMouseLeave={() => this.toggleShowButtons(false)}
      >
        <button
          style={{ color: isStared ? 'yellow' : '' }}
          className="favorite-Btn"
          onClick={() => {
            emailService.starEmail(id);
            eventBusService.emit('refresh');
          }}
        >
          ☆
        </button>
        <Link className="link" to={`/mail/${id}`}>
          <span className="mail-preview-from">{from}</span>
          <span className="mail-preview-header">{subject}</span>
          <span className="mail-preview-content">{body}</span>
        </Link>
        {this.state.isShowButtons && (
          <div>
            <button
              onClick={() => {
                emailService.trashEmail(id);
                eventBusService.emit('refresh');
              }}
            >
              <img className="trash-img" src="./assets/imgs/trash.svg" />
            </button>
          </div>
        )}
      </article>
    );
  }
}

export default EmailPreview;
