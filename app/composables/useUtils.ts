import useUserModel from '~/stores/userModel';

export const useUtils = () => {
  const signinUser = async (email: string, password: string) => {
    try {
      const userModel = useUserModel();
      const signInResult = await $fetch('/api/user/signin', {
        method: 'POST',
        query: { email: email, password: password },
      });
      
      if (signInResult.error) {
        console.error('Signin error:', signInResult.error);
        throw new Error(signInResult.error);
      }
      
      if (signInResult.userEmail) {
        userModel.loginUser(signInResult.userEmail);
      }
      
      console.log('Signin successful:', signInResult);
      return signInResult;
    } catch (error) {
      console.error('Signin failed:', error);
      throw error;
    }
  };
  return { signinUser };
};
