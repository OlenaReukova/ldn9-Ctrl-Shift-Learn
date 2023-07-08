import { useContext } from "react";
import { AppContext } from "../AppContext";
export const DashboardHero = ()=>{
    const { userName } = useContext(AppContext);
            return (
              <div className="pr_card">
                <h2>Hello {userName}!</h2>
              </div>
            );
          };