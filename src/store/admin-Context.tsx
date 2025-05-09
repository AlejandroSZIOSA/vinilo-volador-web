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

  nextEvent: Event;
  updatedList: Date;

  add_Vinyl: (v: Vinyl) => void;
  remove_Vinyl: (v: string) => void;

  /* is_Authenticated: boolean | string;
  login_Fn: (token: string) => void;
  logout_Fn: () => void; */
}

//Reducers

//discriminant types
type ADD_VINYL = {
  type: "ADD_VINYL";
  payload: Vinyl;
};

type REMOVE_VINYL = {
  type: "REMOVE_VINYL";
  payload: string;
};

type Action = ADD_VINYL | REMOVE_VINYL; // discriminant union

function vinylsReducer(state: Vinyl[] | null, action: Action): Vinyl[] {
  switch (action.type) {
    case "ADD_VINYL":
      return state ? [...state, action.payload] : [action.payload];
    case "REMOVE_VINYL":
      return state ? state.filter((vinyl) => vinyl.id !== action.payload) : [];
    /* case 'UPDATE_VINYL':
      return state ? state.map(vinyl => vinyl.id === action.payload.id ? action.payload : vinyl) : []; */
    default:
      return state || [];
  }
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider_Ctx = ({ children }: { children: ReactNode }) => {
  /*   const [vinyls, setVinyls] = useState<Vinyl[] | null>(VINYLS);
   */

  const [vinylsState, dispatch] = useReducer(vinylsReducer, VINYLS);

  /*  const login_Fn = (t: string) => setAuthenticated(t); 
  const logout_Fn = () => setAuthenticated(false); */

  const ctx: AdminContextType = {
    vinyls: vinylsState,
    add_Vinyl(v) {
      dispatch({ type: "ADD_VINYL", payload: v });
    },
    remove_Vinyl(v) {
      dispatch({ type: "REMOVE_VINYL", payload: v });
    },
  };

  return <AdminContext.Provider value={ctx}>{children}</AdminContext.Provider>;
};

export const useAdmin_Ctx = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAuth must be used within an AdminProvider");
  return context;
};
