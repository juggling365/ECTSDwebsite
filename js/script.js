const signupForm = document.querySelector('#free-week-form');
const formMessage = document.querySelector('#form-message');

signupForm?.addEventListener('submit', async (event) => {
	event.preventDefault();

	if (!signupForm.checkValidity()) {
		formMessage.textContent = 'Please complete each field so we can contact you.';
		return;
	}

	const formData = new FormData(signupForm);
	const name = formData.get('name');
	const email = formData.get('email');
	const phone = formData.get('phone') || 'Not provided';
	const classInterest = formData.get('class-interest');
	const childAge = formData.get('child-age')|| 'Not provided';
	const data = {
  name,
  email,
  phone,
  classInterest
  childAge
};

try {
  const response = await fetch(
    'https://freeweekbackend.electriccitytangsoodo.workers.dev',
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
    formMessage.textContent =
      `Thanks, ${name}! We will be in touch to schedule your free week. Check your email for confirmation.`;

    signupForm.reset();
  } else {
    formMessage.textContent =
      'There was a problem sending your request. Please try again.';
  }

} catch (error) {
  console.error(error);

  formMessage.textContent =
    'Unable to submit the form right now. Please try again later.';
}

});
