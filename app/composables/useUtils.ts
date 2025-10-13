import useUserModel from '~/stores/userModel';

export const useUtils = () => {
  const signinUser = async (email: string, password: string) => {
    try {
      const userModel = useUserModel();
      const signInResult = await $fetch('/api/user/signin', {
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
