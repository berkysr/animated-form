function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-up');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //check for validation

            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'password' && validatePassword(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = 'shake 0.5s ease';
            }
            //to reset animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
}

function validateUser(user) {
    const nameError = document.querySelector('.name-error');
    if (user.value.length < 6) {
        error('rgb(189, 87, 87)');
        nameError.classList.remove('inactive');
        nameError.style.animation = 'shake 0.5s ease';
    } else {
        nameError.classList.add('inactive');
        error('rgb(87, 189, 130)');
        return true;
    }
    nameError.addEventListener('animationend', () => {
        nameError.style.animation = '';
    });

}

function validateEmail(email) {
    const emailError = document.querySelector('.email-error');
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        emailError.classList.add('inactive');
        error('rgb(87, 189, 130)');
        return true;
    } else {
        emailError.classList.remove('inactive');
        error('rgb(189, 87, 87)');
        emailError.style.animation = 'shake 0.5s ease';
    }
    emailError.addEventListener('animationend', () => {
        emailError.style.animation = '';
    });
}

function validatePassword(password) {
    const passError = document.querySelector('.pass-error');
    if (password.value.length < 6) {
        passError.classList.remove('inactive');
        error('rgb(189, 87, 87)');
        passError.style.animation = 'shake 0.5s ease';
    } else {
        passError.classList.add('inactive');
        error('rgb(87, 189, 130)');
        return true;
    }
    passError.addEventListener('animationend', () => {
        passError.style.animation = '';
    });
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}


animatedForm();