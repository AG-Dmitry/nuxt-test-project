export const useUtils = () => {
  const fetch = async () => {
    const response = await $fetch('/api/graph');
    console.log('Response: ' + response.renderMap);
  };
  return { fetch };
};
