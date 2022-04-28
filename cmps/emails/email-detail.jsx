import { emailService } from '../../services/email.service.js';
import { eventBusService } from '../../services/event-bus-service.js';
class EmailDetail extends React.Component {
  state = {
    email: null,
  };

  componentDidMount() {
    this.loadEmail();
  }

  findSender = (email) => {
    const cut = email.indexOf('@');
    const sender = email.slice(0, cut);
    return sender;
  };

  getDate = (time) => {
    const date = new Date(time);
    const fullDate =
      +date.getDate() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds();
    return fullDate;
  };

  loadEmail = () => {
    const { id } = this.props.match.params;
    console.log(id);
    emailService.getById(id).then((email) => {
      if (!email) return this.props.history.push('/');
      this.setState({ email });
      console.log(email);
    });
  };
  render() {
    const { email } = this.state;
    if (!email) return <div>Loading..</div>;
    return (
      <section className="email-detail">
        <div className="email-options">
          <button
            className="dlt-btn"
            onClick={() => {
              emailService.trashEmail(email.id);
              eventBusService.emit('refresh');
              this.props.history.push('/');
            }}
          >
            <img className="trash-img" src="./assets/imgs/trash.svg" />
          </button>
        </div>
        <h1 className="email-header">{email.subject}</h1>
        <h5 className="email-from">
          <span className="email-sender">{this.findSender(email.from)}</span>
          <span className="full-email">{email.from}</span>
        </h5>
        <h3 className="email-date">{this.getDate(email.sentAt)}</h3>

        <p className="email-body">{email.body}</p>
      </section>
    );
  }
}

export default EmailDetail;
