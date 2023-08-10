async function getAuthData() {
  // TODO: integrar com o backend
  const getUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return false;
  };

  try {
    return getUser();
  } catch (error) {
    return null;
  }
}

export { getAuthData };
