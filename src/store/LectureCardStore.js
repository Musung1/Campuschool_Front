// ./stores/memos.js
import create from 'zustand';
import { getPopularLectures,getRecentLectures,getMyOpenLectures } from '../api/LectureFormAPI';


export const useLectureCardStore = create((set) => ({
    popularLectures: [],
    recentLectures: [],
    myOpenLectures: null,
    setPopularLectures: async () => {
        const popularLectures = await getPopularLectures();
        set((prev) => ({ ...prev, popularLectures: popularLectures }));
    },
    setRecentLectures: async () => {
        const recentLectures = await getRecentLectures();
        set((prev) => ({ ...prev, recentLectures: recentLectures }));
    },
    setMyOpenLectures: async () => {
        const myOpenLectures = await getMyOpenLectures();
        set((prev) => ({ ...prev, myOpenLectures: myOpenLectures }));
    }
    
}));

