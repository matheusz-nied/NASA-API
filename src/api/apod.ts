import apiClient from "./axios";

const getFormattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const fetchAndCacheApods = async () => {
  const now = new Date();
  const end_date = getFormattedDate(now);

  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 30); // Subtrair 30 dias da data atual
  const start_date = getFormattedDate(pastDate);
console.log("fetching nasa...")
  const response = await apiClient.get("/apod", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      start_date,
      end_date,
    },
  });

  // Salva os dados e a data de cache no localStorage
  localStorage.setItem('apodsData', JSON.stringify(response.data));
  localStorage.setItem('apodsCacheDate', end_date);

  return response.data;
};

const getApods = async () => {
  const cachedDate = localStorage.getItem('apodsCacheDate');
  const now = new Date();
  const end_date = getFormattedDate(now);
  if (cachedDate === end_date) {
    const cachedData = localStorage.getItem('apodsData');

    const data =  cachedData ? JSON.parse(cachedData) : await fetchAndCacheApods();
    console.log(data)
    return data;
  } else {
    return await fetchAndCacheApods();
  }
};

export { getApods };
