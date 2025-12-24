export const fetchApi = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return response.json();
};
