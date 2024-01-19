import NeuroDebit from "../../components/index/NeuroDebit";
import { DEBIT } from "../../constants/constants";
import debit from './styles/debit.module.css'

export default function Debit() {
  return (
    
    <section className={debit.container}>
        
        <section>
            <NeuroDebit />
        </section>
        <section>
            <img src={DEBIT.visa} width={50}/>
            <img src={DEBIT.mastercard} width={50}/>
        </section>
        
    </section>
  )
}
