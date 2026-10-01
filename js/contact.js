const contactForm = document.querySelector('#contact-form');
const contactFormMessage = document.querySelector('#contact-form-message');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactFormMessage.textContent = 'Please complete each field before sending your message.';
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const subject = `Website message from ${name}`;
  const body = [
    'New message from the website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message
  ].join('\n');

  window.location.href = `mailto:electriccitytangsoodo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  contactFormMessage.textContent = 'Thanks for reaching out. We will be in touch soon.';
  contactForm.reset();
});
