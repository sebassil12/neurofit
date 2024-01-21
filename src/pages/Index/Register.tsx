import RegisterNeuroForm from "../../components/index/RegisterNeuroForm";
import register from "./styles/register.module.css"
export default function Register() {
  return (
    <div className={register.container}>
        <RegisterNeuroForm />
    </div>
  )
}
