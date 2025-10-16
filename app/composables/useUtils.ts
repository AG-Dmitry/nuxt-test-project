import useUserModel from '~/stores/userModel';

export const useUtils = () => {
  const signinUser = async (email: string, password: string) => {
    const { $csrfFetch } = useNuxtApp();
    try {
      const userModel = useUserModel();
      const signInResult = await $csrfFetch('/api/user/signin', {
        method: 'POST',
        body: { email: email, password: password },
      });

      if (signInResult.error) {
        console.error('Sign in error:', signInResult.error);
        throw new Error(signInResult.error);
      }

      if (signInResult.userEmail) {
        userModel.loginUser(signInResult.userEmail);
      }

      console.log('Sign in successful:', signInResult);
      return signInResult;
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  };
  return { signinUser };
};
