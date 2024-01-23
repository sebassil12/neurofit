import { useContext } from "react";
import NeuroDebit from "../../components/index/NeuroDebit";
import { DEBIT } from "../../constants/constants";
import debit from './styles/debit.module.css'
import IsKitContext from "../../components/neuroApp/KitContext";

export default function Debit() {
  const {isKit} =useContext(IsKitContext)
  return (
    
    <section className={debit.container}>
        
        <section>
            <NeuroDebit isKitPurchase={isKit} />
        </section>
        <section>
            <img src={DEBIT.visa} width={50}/>
            <img src={DEBIT.mastercard} width={50}/>
        </section>
        
    </section>
  )
}
