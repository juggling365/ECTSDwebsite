const signupForm = document.querySelector('#free-week-form');
const formMessage = document.querySelector('#form-message');

signupForm?.addEventListener('submit', (event) => {
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
	const subject = `Free Week Request from ${name}`;
	const body = [
		'New free week request',
		'',
		`Name: ${name}`,
		`Email: ${email}`,
		`Phone: ${phone}`,
		`Class interest: ${classInterest}`
	].join('\n');

	window.location.href = `mailto:electriccitytangsoodo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	formMessage.textContent = `Thanks, ${name}. We will be in touch to schedule your free week.`;
	signupForm.reset();
});