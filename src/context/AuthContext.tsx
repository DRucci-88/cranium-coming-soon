import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import jwt_decode from 'jwt-decode';

interface IUserAuth {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
}

interface IAuthContextType {
  accessToken: string | null,
  userAuth: IUserAuth | null,
  jwtDecodeToken: (accessToken: string) => void
}

const useAuth = () => {
  return useContext(AuthContext);
}

const AuthContext = createContext<IAuthContextType>({
  accessToken: '',
  userAuth: null,
  jwtDecodeToken: () => {}
})

const AuthContextProvider = (props: {children: ReactNode}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userAuth, setUserAuth] = useState<IUserAuth | null>(null);

  useEffect(() => {
    // axios
  },[]);

  const jwtDecodeToken = (accessToken: string) => {
    const decoded: IUserAuth = jwt_decode(accessToken);
    console.log(decoded, accessToken);
    setAccessToken(accessToken);
    setUserAuth(decoded);
  }
  return(
    <AuthContext.Provider value={{accessToken, userAuth, jwtDecodeToken}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export {
  useAuth
}
