const isSupported = () => typeof window !== 'undefined';

export const getClientWindowHeight = () => {
  if (!isSupported()) {
    return 0;
  }

  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
};

export default getClientWindowHeight;
