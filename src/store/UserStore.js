import create from "zustand";
import {
  getUser,
  modifyDescription,
  modifyImg,
  modifyName,
} from "../api/UserAPI";
const useUserStore = create((set) => ({
  user: {},
  // id: '',
  // name: '',
  // img: '',
  // portfolioImg: '',
  // roleType: '',
  img: null,
  setImage: async (value) => {
    set({ img: value });
    await modifyImg(value);
  },
  setName: async (name) => {
    await modifyName(name);
  },
  setDescription: async (description) => {
    await modifyDescription(description);
  },
  setUser: (userDTO) => {
    set({
      user: {
        id: userDTO.id,
        name: userDTO.name,
        img: userDTO.img,
        portfolioImg: userDTO.portfolioImg,
        roleType: userDTO.roleType,
      },
    });
  },
  userDetail: async () => {
    try {
      const userDTO = await getUser();
      console.log(userDTO);
      set({
        user: {
          id: userDTO.id,
          name: userDTO.name,
          img: userDTO.img,
          description: userDTO.description,
          portfolioImg: userDTO.portfolioImg,
          roleType: userDTO.roleType,
        },
      });
    } catch {
      console.log("error");
    }
  },
}));
export default useUserStore;
