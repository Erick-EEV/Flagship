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
 
  export const passwordState = atom({
    key: "current_password",
    default: ""
  })

  export const loggedInUser = atom({
     key: "loggedIn_user",
     default: []
  })