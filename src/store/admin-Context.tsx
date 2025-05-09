import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useReducer,
} from "react";
import type { Event, Vinyl } from "../types/shared";
import { VINYLS, NEXT_EVENT } from "../data/static-data";

interface AdminContextType {
  vinyls: Vinyl[] | null;

  /* updatedList: Date;
  nextEvent: Event; */

  /* is_Authenticated: boolean | string;
  login_Fn: (token: string) => void;
  logout_Fn: () => void; */
}

//Reducers
/* function VinilsReducer(state: Vinyl[] | null, action: any) {



} */

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider_Ctx = ({ children }: { children: ReactNode }) => {
  const [vinyls, setVinyls] = useState<Vinyl[] | null>(VINYLS);

  /* useReducer(reducer,initialState) */

  /*  const login_Fn = (t: string) => setAuthenticated(t); 
  const logout_Fn = () => setAuthenticated(false); */

  return (
    <AdminContext.Provider value={{ vinyls }}>{children}</AdminContext.Provider>
  );
};

export const useAdmin_Ctx = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAuth must be used within an AdminProvider");
  return context;
};
