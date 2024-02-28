import create from 'zustand';

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
    }
}))
export default useUserStore;