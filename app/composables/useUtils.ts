import useUserModel from '~/stores/userModel';

export const useUtils = () => {
  const loginUser = async (email: string, password: string) => {
    const { $csrfFetch } = useNuxtApp();
    try {
      const userModel = useUserModel();
      const loginResult = await $csrfFetch('/api/user/login', {
        method: 'POST',
        body: { email: email, password: password },
      });

      if (loginResult.error) {
        console.error('Sign in error:', loginResult.error);
        throw new Error(loginResult.error);
      }

      if (loginResult.userEmail) {
        userModel.loginUser(loginResult.userEmail);
      }

      console.log('Sign in successful:', loginResult);
      return loginResult;
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  };
  return { loginUser };
};
