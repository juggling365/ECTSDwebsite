const contactForm = document.querySelector('#contact-form');
const contactFormMessage = document.querySelector('#contact-form-message');

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactFormMessage.textContent =
      'Please complete each field before sending your message.';
    return;
  }

  const formData = new FormData(contactForm);

const data = {
  name: formData.get('name'),
  email: formData.get('email'),
  message: formData.get('message'),
  turnstileToken:
    formData.get('cf-turnstile-response')
};


  contactFormMessage.textContent = 'Sending...';

  try {

    const response = await fetch(
      'https://freeweekbackend.electriccitytangsoodo.workers.dev/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    if (result.success) {
      contactFormMessage.textContent =
        'Thank you! Your message has been sent.';
      contactForm.reset();
    } else {
      contactFormMessage.textContent =
        'There was an error sending your message.';
    }

  } catch (error) {
    contactFormMessage.textContent =
      'There was an error sending your message.';
  }
});
