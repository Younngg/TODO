const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginText = document.querySelector('#login-form .login-text');
const greeting = document.querySelector('#greeting');
const todoForm = document.querySelector('#todo-form');
const todoFormInput = document.querySelector('#todo-form input');
const todotodo = document.querySelector('#todo-list');
const todoLi = document.querySelector('#todo-list li');

const logoutBtn = document.querySelector('#logout');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.clear();
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove('logoutBtn');
  greeting.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.add(HIDDEN_CLASSNAME);
  loginText.value = null;
  while (todotodo.hasChildNodes()) {
    todotodo.removeChild(todotodo.firstChild);
  }
}

logoutBtn.addEventListener('click', onLogoutSubmit);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add('logoutBtn');
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hi ${username}, What you need to do is...`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoFormInput.value = null;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add('logoutBtn');
}
