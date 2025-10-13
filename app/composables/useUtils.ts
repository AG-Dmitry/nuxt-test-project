import useUserModel from '~/stores/userModel';

export const useUtils = () => {
  const signinUser = async (email: string, password: string) => {
    const userModel = useUserModel();
    const signInResult = await $fetch('/api/signin', {
      method: 'POST',
      query: { email: email, password: password },
    });
    if (signInResult.userEmail) userModel.loginUser(signInResult.userEmail);
    console.log(signInResult);
  };
  return { signinUser };
};
