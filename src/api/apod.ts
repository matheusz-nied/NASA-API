import apiClient from "./axios";

const getFormattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getApods = async () => {
  const now = new Date();
  const end_date = getFormattedDate(now);

  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 30); // Subtrair 30 dias da data atual
  const start_date = getFormattedDate(pastDate);

  const response = await apiClient.get("/apod", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      start_date,
      end_date,
    },
  });

  return response;
};

export { getApods };
