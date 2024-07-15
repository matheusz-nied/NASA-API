import apiClient from "./axios";
import apodsData from "../api/fake.json";

const getFormattedDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getApods = async () => {
  const start_date = "2024-07-13";
  const end_date = getFormattedDate();

  const responseApod = await apiClient.get("/apod", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      start_date,
      end_date,
    },
  });
  console.log(responseApod.data);
  const response = {
    data: [...Object.values(apodsData), ...responseApod.data],
  };

  return response;
};

export { getApods };
