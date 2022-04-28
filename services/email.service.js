export const emailService = {
  getEmails,
  getById,
  query,
  starEmail,
  trashEmail,
  sendEmail
};

import { utilService } from './util.service.js'


let gRecivedEmails = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'dsa@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'dasd',
    subject: 'like you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'dsfdadasdasadsadsasgas@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: '4214a',
    subject: 'phone you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'mreso@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'das41223',
    subject: 'gimme you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'm232o@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'gfds234',
    subject: 'really you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'mdahmo@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'xcbv345',
    subject: 'asf you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'mohgjhgo@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'kjgf2',
    subject: 'blabla you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'm543mo@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: '123asd',
    subject: 'really you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'mojgho@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'cxs341',
    subject: 'who are you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'kjgfmo@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'esdfa651',
    subject: 'hey you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'm654o@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'sdf01',
    subject: 'f you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'mgdso@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'e1gfds01',
    subject: 'hate you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'kjnlkmo@momo.com',
    isStared: false,
    isTrashed: false
  },
  {
    id: 'e102221',
    subject: 'love you!',
    body: ' Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'whoo@momo.com',
    isStared: false,
    isTrashed: false
  },
];

let gSentEmails = [

]

function sendEmail(email) {
  const { subject, message, to } = email
  const mail = {
    id: utilService.makeId(),
    subject: subject,
    body: message,
    isRead: false,
    sentAt: '',
    from: to,
    isStared: false,
    isTrashed: false,
  }
  gSentEmails.unshift(mail)
  Promise.resolve(mail)
}

function getEmails() {
  return Promise.resolve(gRecivedEmails);
}

function getById(id) {
  const email = gRecivedEmails.find((email) => id === email.id);
  return Promise.resolve(email);
}

function starEmail(id) {
  const email = gRecivedEmails.find((email) => email.id === id);
  email.isStared = !email.isStared;
}

function query(filterBy = null, filterParam = null) {
  // let emails = _loadFromStorage()
  // if (!emails) {
  //     cars = _createCars()
  //     _saveToStorage(cars)
  // }
  let emails = gRecivedEmails;

  if (filterParam === 'sent') {
    emails = gSentEmails.filter(email => email.isTrashed === false)
    return Promise.resolve(emails)
  }

  if (filterParam === 'starred') {
    emails = emails.filter(
      (email) =>

        (filterParam === 'starred' && email.isStared)
    );
  }

  if (filterBy) {
    emails = emails.filter(
      (email) =>
      (email.subject.toLowerCase().includes(filterBy.toLowerCase()) ||
        email.from.toLowerCase().includes(filterBy.toLowerCase()))

    );
  }
  if (filterParam === 'trashed') {
    const revicedTrashed = emails.filter(email => email.isTrashed === true);
    const sentTrashed = gSentEmails.filter(email => email.isTrashed === true);
    const mails = [...revicedTrashed, ...sentTrashed];
    return Promise.resolve(mails)
    // return Promise.resolve(emails.filter(email => email.isTrashed === true) || gSentEmails.filter(email => email.isTrashed === true))
  } else {
    emails = emails.filter(email => email.isTrashed === false)
  }


  return Promise.resolve(emails);
}

function trashEmail(id) {
  const email = gRecivedEmails.find((email) => email.id === id) || gSentEmails.find((email) => email.id === id);
  if (email.isTrashed) {
    // let idx = gRecivedEmails.indexOf(email) || gSentEmails.indexOf(email.id)
    gRecivedEmails = gRecivedEmails.filter(mail => mail.id !== id)
    gSentEmails = gSentEmails.filter(mail => mail.id !== id)

  }
  if (!email.isTrashed) email.isTrashed = true
}

