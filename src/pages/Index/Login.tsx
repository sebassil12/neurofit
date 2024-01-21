import NeuroForm from "../../components/index/NeuroForm";
import login from './styles/login.module.css'

export default function Login() {
  return (
    <section className={login.container}>
      <h1 className={login.title}>Portal NeuroFITT</h1>
        <NeuroForm />

    </section>    
  )
}
