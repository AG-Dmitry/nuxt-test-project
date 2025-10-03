export const useUtils = () => {
  const sayHello = () => {
    console.log('Hello');
  };
  const fetch = async () => {
    const response = await $fetch('/api/hello');
    console.log('Response: ' + response.hello);
  };
  return { sayHello, fetch };
};
