import EmailList from '../cmps/emails/email-list.jsx';
import { emailService } from '../services/email.service.js';
import { eventBusService } from '../services/event-bus-service.js';
class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: '',
  };

  componentDidMount() {
    this.loadEmails();
    eventBusService.on('filter', (filterBy) => {
      this.setState(
        (prevState) => ({ ...prevState, filterBy }),
        () => {
          this.loadEmails();
        }
      );
    });
    eventBusService.on('refresh', () => {
      this.loadEmails();
    });
    // eventBusService.on('filterBox', () => {
    //   this.loadEmails();
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.filter !== this.props.match.params.filter) {
      this.loadEmails();
    }
  }

  loadEmails = () => {
    const { filter } = this.props.match.params;
    emailService
      .query(this.state.filterBy, filter)
      .then((emails) => this.setState({ emails }));
  };

  render() {
    const { emails } = this.state;
    // const a = emailService
    //   .query(this.state.filterBy, this.state.sideFilter)
    //   .then((emails) => this.setState({ emails }));
    return (
      <section className="email-app">
        <EmailList emails={emails} />
      </section>
    );
  }
}

export default EmailApp;
