import EmailPreview from './email-preview.jsx';

import {emailService} from '../../services/email.service.js'

class EmailList extends React.Component {

  render() {
    const {emails} = this.props
    return (
      <section className="email-list">
        
        {emails.map(email => <EmailPreview key={email.id} {...email}/> )}
        
      </section>
    );
  }
}

export default EmailList;
