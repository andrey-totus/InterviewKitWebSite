function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Пользователь ' + name + ' зарегистрирован!');
    }
}