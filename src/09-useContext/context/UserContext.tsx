import { createContext, useEffect, useState, type PropsWithChildren} from "react"
import { users, type User } from "../data/user-mock.data";


type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProprs {
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;

  login: (iserId: number) => boolean;
  logout: () => void; 
};


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProprs)
  
export const UserContextProvider = ({ children }: PropsWithChildren) => {

  const [authStatus, setAuthstatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);
  
  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthstatus('not-authenticated');
      return false;
    }; 

    setUser(user);
    setAuthstatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true; 
  };

  const handleLogout = () => {
    console.log('logout');
    setAuthstatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      handleLogin(+storedUserId);
      return;
    };
    handleLogout();
  });

  return <UserContext
    value={{
      authStatus: authStatus,
      isAuthenticated: authStatus === 'authenticated',
      user: user,
      login: handleLogin,
      logout: handleLogout,
    }} 
  >
    {children}
  </UserContext >;
};


