import create from 'zustand';
import { getUser } from '../api/UserAPI';
const useUserStore = create(set => ({
    user: {}
    // id: '',
    // name: '',
    // img: '',
    // portfolioImg: '',
    // roleType: '',
    ,
    setUser: (userDTO) => {
        set({user: {
            id: userDTO.id,
            name: userDTO.name,
            img: userDTO.img,
            portfolioImg: userDTO.portfolioImg,
            roleType: userDTO.roleType,
        }
        })
    },
    userDetail: async () => {
        try {
          const userDTO = await getUser();
          console.log(userDTO)
          set({user: {
            id: userDTO.id,
            name: userDTO.name,
            img: userDTO.img,
            portfolioImg: userDTO.portfolioImg,
            roleType: userDTO.roleType,
        }
        })
        }
        catch {
  
        }
      }
}))
export default useUserStore;