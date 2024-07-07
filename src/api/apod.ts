import apiClient from "./axios";
import apodsData from "../api/fake-response.json";
const getApods = (start_date: string, end_date: string) => {
//   return apiClient.get("/apod", {
//     params: {
//       api_key: import.meta.env.VITE_API_KEY,
//       start_date,
//       end_date,
//     },
//   });

    const response = {
        data: apodsData
    }
    return response
};

export { getApods };
