// ./stores/memos.js
import create from 'zustand';
import { getPopularLectures } from '../api/LectureFormAPI';


export const useLectureCardStore = create((set) => ({
    popularLectures: [],
    setPopularLectures: async () => {
        set({popularLectures: await getPopularLectures()})
    }
}));

