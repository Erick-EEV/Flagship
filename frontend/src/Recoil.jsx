import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';


  export const usernameState = atom({
    key: "current_username",
    default: ""
  })

  export const userS = atom({
    key: "userS",
    default: []
  })