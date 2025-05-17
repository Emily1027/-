const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
    window.location.href = 'index.html'; 
}

document.getElementById('userLogin').textContent = user.login;
document.getElementById('login').textContent = user.login;
document.getElementById('birthdate').textContent = user.birthdate;
document.getElementById('gender').textContent = user.gender === 'male' ? 'Мужской' : 'Женский';

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('testScore');
    window.location.href = 'index.html'; 
});
