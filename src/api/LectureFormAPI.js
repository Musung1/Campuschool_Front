import { apiService } from "./UserAPI";

export const createLectureForm = async (lectureForm) => {
    try {
        const response = await apiService.post('/class/open',lectureForm);
        return response.data;
      } catch (error) {
        console.error('Error fetching lecture:', error);
        throw error;
      }
}
