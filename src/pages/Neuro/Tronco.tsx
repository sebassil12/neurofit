import ExerciseCard from "../../components/index/CardExercise/ExerciseCard";
import { TRONCO } from "../../constants/constants";

export default function Tronco() {
  return (
    <section>
      <h1 style={{ fontSize: "50px" }}>Ejercicios de Tronco</h1>
      <br />
      <br />

      <section style={{ display: "flex" }}>
        <ExerciseCard
          title={<h4>Primera Fase </h4>}
          pathImage={TRONCO.phase1}
          onepart={`Control de cabeza y cuello con el paciente acostado boca arriba se realiza movimiento de cuello y cabeza en flexión y extensión y posterior en movimientos diagonales. 
        `}
          titleone={"Primero"}
          titletwo={"Segundo"}
          twopart={
            "Ejercicio de sedestación asistida controlando la cabeza y cuello, desde la posición  acostado boca arriba del paciente con ayuda de una tercera persona que toma de las manos del paciente y tira de estas tratando de lograr una sedestación mientras al mismo tiempo mantiene la cabeza en una posición erguida."
          }
          threepart={
            "Con el paciente acostado boca arriba, con las rodillas flexionadas, apoyando las plantas de los pies contra la cama, se realiza una elevación de cadera y se mantiene en esta posición."
          }
          titlethree={"Tercero"}
        />
        <ExerciseCard
          title={<h4>Primera fase <br/> Giro</h4>}
          pathImage={TRONCO.phase11}
          onepart={
            "Ejercicios de volteos, hacia el lado sano y al lado afecto, con el paciente acostado boca arriba  "
          }
          titleone={"Primero"}
          twopart={"Se levanta el brazo del lado al que vamos a girar, posteriormente con ayuda de una tercera persona se brinda un estímulo desde la cadera y tronco. "}
          titletwo={"Segundo"}
          threepart={"Se realiza un medio giro y luego se logra un giro completo."}
          titlethree={"Tercero"}
        />
        <ExerciseCard
          title={"Segunda fase"}
          pathImage={TRONCO.second}
          onepart={
            "Con el paciente sentado en el borde de la cama se coloca almohadas a los dos lados y una tercera persona se encontrara sentada en la parte posterior (espalda del paciente) ayuda al paciente a realizar desequilibrios laterales haciendo cargas de peso tanto en cadera como en brazo y pedimos que se mantenga en esta posición."
          }
          titleone={"Primero"}
          twopart={
            "Con el paciente sentado en el borde de la cama se coloca almohadas a los dos lados, con una persona el frente sujetando una cinta el tronco del paciente por la parte posterior (espalda del paciente) ayuda al paciente a realizar desequilibrios anteriores y posteriores haciendo cargas de peso y pedimos que se mantenga en esta posición."
          }
          titletwo={"Segundo"}
          threepart={
            "Una vez que el paciente ya se mantiene sentado por sí solo, se realiza ejercicios de alcance con ambos miembros superiores con el objetivo de trabajar una doble tarea, para esto se debe colocar un objeto que estimule al paciente para que desee agarrarlo, un persona debe estar a su lado ayudando a que se mantenga el control de tronco y evitando cualquier accidente."
          }
          titlethree={"Tercero"}
        />
        <ExerciseCard
          title={"Tercera fase"}
          pathImage={TRONCO.third}
          onepart={
            "Una vez que el paciente ya controle de manera independiente el tronco al mantenerse sentado por sí solo, una tercera persona ayudará al paciente a ponerse de pie, para esto el paciente se apoya en el hombro de la persona que le vaya ayudar, y esta a su vez se tomará al paciente desde la cadera del lado afecto y del tronco y con un impulso se realizará la bipedestación ayudando con la rodilla de la segunda persona a estabilizar la rodilla afecta del paciente. "
          }
          titleone={"Primero"}
          twopart={
            "Una vez de pie se realizará cargas del peso corporal en ambos lados, para esto se mantendrá la misma posición anteriormente mencionada, y se llevará el paciente apoyarse sobre la pierna sana y posteriormente sobre la pierna del lado afecto. "
          }
          titletwo={"Segundo"}
          threepart={
            "Una vez que el paciente vaya controlando mejor el tronco en la bipedestación, se solicitará que se siente  y se levanta cada vez con menos apoyo del ayudante y se mantenga cada vez un poco mas de tiempo de pie. "
          }
          titlethree={"Tercero"}
        />
      </section>
    </section>
  );
}
