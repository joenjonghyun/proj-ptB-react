import React from "react";
import styles from "/styles/trade.module.css"

export function Ttrade(){ 
return (
  
  <table className={styles.tab}>
  <h5 className={styles.text}>자동거래</h5>
    <select style={{height:30, width:510 +"px"}} >
        <option >비트코인</option>
        <option >도지코인</option>
        <option >코인미정</option>
    </select>
    <checkbox>사용자 정의</checkbox>

  <tr className={styles.tr}>
  <div>
  <button className={styles.buttons}>자동매매시작</button>
            </div>
 
  </tr>
</table>
)
}