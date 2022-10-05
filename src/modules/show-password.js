export const showPassword = () => {
const inputPassword = document.querySelectorAll('.form__input-password');
const btnEyePassword = document.querySelectorAll('.form__password-eye');

btnEyePassword.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('form__password-eye-show');
        inputPassword[i].type = btn.classList.contains('form__password-eye-show')
        ? 'text'
        : 'password';
    })
})
}
showPassword();