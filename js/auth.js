const authForm = document.forms.authForm;

authForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const loginError = document.getElementById('loginError');
    const birthdateError = document.getElementById('birthdateError');
    const genderError = document.getElementById('genderError');


    loginError.textContent = '';
    birthdateError.textContent = '';
    genderError.textContent = '';

    if (!authForm.login.validity.valid) {
        loginError.textContent = 'Логин должен состоять из 4-10 символов (русские буквы и цифры).';
    }

    if (!authForm.birthdate.validity.valid) {
        birthdateError.textContent = 'Дата рождения должна быть между 1950 и 2023 годом.';
    }

    if (!authForm.gender.value) {
        genderError.textContent = 'Пожалуйста, выберите пол.';
    }

    if (authForm.login.validity.valid && authForm.birthdate.validity.valid && authForm.gender.value) {
        const user = {
            login: authForm.login.value,
            birthdate: authForm.birthdate.value,
            gender: authForm.gender.value
        };
        localStorage.setItem('user', JSON.stringify(user));
        window.location = 'description.html';
    }
});