// import 'dotenv/config';
import { stackServerApp } from '../auth/stack';

const email = 'artgreg.tga@gmail.com';
const password = '12345678!iI';

// Регистрация пользователя

const signUpResult = await stackServerApp.signUpWithCredential({
  email: email,
  password: password,
  noRedirect: true,
  // Страница подтверждения успешной регистрации после перехода по ссылке из email
  verificationCallbackUrl: 'https://nuxt-test-project-plum.vercel.app/userinfo',
});

if (signUpResult.status === 'error') {
  console.log(`Sign up failed: ${signUpResult.error.humanReadableMessage}`);
} else {
  console.log(signUpResult);
}

// Вход пользователя

const signInResult = await stackServerApp.signInWithCredential({
  email: email,
  password: password,
});

if (signInResult.status === 'error') {
  console.log(
    `Account created but sign in failed: ${signInResult.error.humanReadableMessage}`,
  );
} else {
  console.log(signInResult);
}

// Получение текущего пользователя

const currentUser = await stackServerApp.getUser();

console.log(currentUser);

// Выход пользователя

if (currentUser) {
  await currentUser.signOut();
}

// Удаление пользователя

if (currentUser) {
  await currentUser.delete();
}