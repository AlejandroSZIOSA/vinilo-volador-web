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
  vinyls_: Vinyl[] | null;
  next_Event: Event | null;
  updated_ListDate: string;
  addVinyl_Fn: (v: Vinyl) => void;
  removeVinyl_Fn: (id: string) => void;
  updateVinyl_Fn: (id: string, updatedVinyl: Vinyl) => void;
  setNextEvent_Fn: (e: Event) => void;
  setUpdatedListDate_Fn: (d: string) => void;
}

//Reducers Vinyls List

//discriminant types
type ADD_VINYL = {
  type: "ADD_VINYL";
  payload: Vinyl;
};

type REMOVE_VINYL = {
  type: "REMOVE_VINYL";
  payload: string;
};

type UPDATE_VINYL = {
  type: "UPDATE_VINYL";
  payload: {
    id: string;
    updatedVinyl: Vinyl;
  };
};

type Action = ADD_VINYL | REMOVE_VINYL | UPDATE_VINYL; // discriminant union

function vinylsReducer(state: Vinyl[] | null, action: Action): Vinyl[] {
  switch (action.type) {
    case "ADD_VINYL":
      return state ? [...state, action.payload] : [action.payload];
    case "REMOVE_VINYL":
      return state ? state.filter((vinyl) => vinyl.id !== action.payload) : [];
    case "UPDATE_VINYL":
      return state
        ? state.map((v) =>
            v.id === action.payload.id
              ? { ...v, ...action.payload.updatedVinyl }
              : v
          )
        : [];
    default:
      return state || [];
  }
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider_Ctx = ({ children }: { children: ReactNode }) => {
  const [vinylsState, dispatch] = useReducer(vinylsReducer, VINYLS);
  const [nextEvent, setNextEvent] = useState<Event | null>(NEXT_EVENT);
  const [updatedListDate, setUpdatedListDate] = useState(
    "2024-05-08T10:00:00.000Z"
  );
  /*  const login_Fn = (t: string) => setAuthenticated(t); 
  const logout_Fn = () => setAuthenticated(false); */

  const ctx: AdminContextType = {
    vinyls_: vinylsState,
    next_Event: nextEvent,
    updated_ListDate: updatedListDate,
    addVinyl_Fn(v) {
      dispatch({ type: "ADD_VINYL", payload: v });
    },
    removeVinyl_Fn(id) {
      dispatch({ type: "REMOVE_VINYL", payload: id });
    },

    updateVinyl_Fn(id, updatedVinyl) {
      dispatch({
        type: "UPDATE_VINYL",
        payload: { id, updatedVinyl },
      });
    },

    setNextEvent_Fn(e) {
      setNextEvent(e);
    },

    setUpdatedListDate_Fn(d) {
      setUpdatedListDate(d);
    },
  };

  return <AdminContext.Provider value={ctx}>{children}</AdminContext.Provider>;
};

export const useAdmin_Ctx = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAuth must be used within an AdminProvider");
  return context;
};
