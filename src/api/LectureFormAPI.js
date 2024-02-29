import { apiService, fileAPIService } from "./UserAPI";

export const createLectureForm = async (lectureForm) => {
    try {
        const response = await fileAPIService.post('/class/open',lectureForm);
        return response.data;
      } catch (error) {
        console.error('Error fetching lecture:', error);
        console.error(lectureForm)
        //throw error;
      }
}
export const getPopularLectures = async () => {
  try {
    const response = await fileAPIService.get('/class/popular');
    return response.data;
  } catch (error) {
    console.error('Error fetching lecture:', error);
    //throw error;
  }
}
