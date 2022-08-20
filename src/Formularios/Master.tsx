import { FunctionComponent } from "react";
import styles from "../Content/css/FrmMaster.module.css";
import Sidebar from "../SideBar/Sidebar";

export const Master: FunctionComponent = ({
children
}) => {
  return (
     <div className={styles.frmMasterDiv}>
     <div className={styles.menuDiv}>
       <div className={styles.frameDiv} />
       <div className={styles.frameDiv1} />
       <div className={styles.frameDiv2} />  
     </div>
     <div className={styles.bodyDiv}>
       <div className={styles.pnlTopDiv}>
         <button className={styles.btnHamburguerButton} />
       </div>
       <div className={styles.corpoDiv}>
         {children}
       </div>
     </div>
   </div>
  );
};
