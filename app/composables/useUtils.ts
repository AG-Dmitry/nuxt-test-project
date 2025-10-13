import useUserModel from '~/stores/userModel';

export const useUtils = () => {
  const signinUser = async (email: string, password: string) => {
    const userModel = useUserModel();
    const { data: signInResult} = await useFetch('/api/user/signin', {
      method: 'POST',
      query: { email: email, password: password },
    });
    if (signInResult.value?.userEmail) userModel.loginUser(signInResult.value.userEmail);
    console.log(signInResult);
  };
  return { signinUser };
};
