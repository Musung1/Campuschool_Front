// ./stores/memos.js
import create from 'zustand';
import { getPopularLectures,getRecentLectures } from '../api/LectureFormAPI';


export const useLectureCardStore = create((set) => ({
    popularLectures: [],
    recentLectures: [],
    setPopularLectures: async () => {
        const popularLectures = await getPopularLectures();
        set((prev) => ({ ...prev, popularLectures: popularLectures }));
    },
    setRecentLectures: async () => {
        const recentLectures = await getRecentLectures();
        set((prev) => ({ ...prev, recentLectures: recentLectures }));
    }
}));

