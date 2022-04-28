import { emailService } from '../../services/email.service.js';
const { withRouter } = ReactRouterDOM;
class EmailCompose extends React.Component {
  state = {
    to: null,
    subject: null,
    message: null,
  };

  handleChange = ({ target }) => {
    const value = target.value;
    const field = target.name;
    this.setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  sendMail = (ev) => {
    ev.preventDefault();
    emailService.sendEmail({ ...this.state });
    this.props.setIsComposeOpen((prevState) => !prevState);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="compose-container">
        <div className="header-container">
          <div className="message-header">New Message</div>
          <div className="buttons-container">
            <button className="close-button">X</button>
          </div>
        </div>

        <form className="compose-form" onSubmit={this.sendMail}>
          <input
            className="to-input"
            onChange={this.handleChange}
            placeholder="To"
            name="to"
          />
          <input
            className="subject-input"
            onChange={this.handleChange}
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="message-input"
            onChange={this.handleChange}
            name="message"
          ></textarea>

          <div className="bottom-container">
            <button className="send-button">Send</button>
            <button className="discard-draft-button">EXIT</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailCompose = withRouter(EmailCompose);
