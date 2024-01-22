import ExerciseCard from "../../components/index/CardExercise/ExerciseCard";
import { PERFETTI } from "../../constants/constants";

export default function Perfetti() {
  return (
    <section style={{display:'flex'}}>
      <ExerciseCard
        title={
          <h4>
            Ejercicio Perfetti con <br />
            texturas
          </h4>
        }
        pathImage={PERFETTI.one}
        onepart={`El paciente deberá encontrarse en
        una posición cómoda, de preferencia sentado para que pueda ver el
        ejercicio a realizar. Este ejercicio debe ser con ayuda de alguien
        más. Primero tomarán la tabla de texturas que incluye en el
        programa, o realizarlo en casa. La zona del cuerpo a usar serán las
        palmas de las manos y las plantas de los pies dependiendo de la
        patología y la zona que afecte. Si tiene mayor dificultad al agarrar
        objetos, al mover sus brazos usará la palma de la mano. Si tiene más
        dificultad para caminar, siente hormigueo en los pies, pinchazos o
        tiene problemas para mover los pies, usará la planta de los pies
        para este ejercicio, sin medias.`}
        titleone={"Para Iniciar"}
        twopart={`
                  El acompañante/cuidador, sujetará
                  la zona corporal a trabajar (mano o pie) y acercará una parte de
                  ella a las texturas. Una por una, primero pasará de arriba hacia
                  abajo del recuadro de la textura escogida, se debe indicar cual es.
                  Por ejemplo recorre con el dedo índice la textura del recuadro 2 la
                  cual es suave. Debe realizar 6 veces de manera completa con los ojos
                  abiertos. Posterior a que el paciente ya reconozca muy bien cada
                  textura, cerrará los ojos. Y con ayuda del cuidador realizará lo
                  mismo. El cuidador sujetará la zona con la que trabaja y pasará de
                  arriba hacia abajo sobre uno de los recuadros, pero el paciente
                  ahora deberá adivinar que textura fue y con qué dedo lo tocó.`}
        titletwo={"Proceso"}
        threepart={`
                  Este
                  ejercicio debe realizarlo de 3 a 5 veces por semana, utilizará
                  diferentes zonas corporales de los miembros afectados (miembros
                  superiores o miembros inferiores). Realizará 4 series de 6
                  repeticiones con ojos abiertos y 6 repeticiones con ojos cerrados.
                  Descansará 3 minutos entre cada serie. Cada ejercicio debe ir
                  acompañado con la respiración adecuada, es decir, toma aire por la
                  nariz y expulsa por la boca. Es muy probable que en las primeras
                  veces, el paciente se frustre por no reconocer la textura indicada,
                  sobre todo con ojos cerrados. No se preocupe y no se altere, es
                  parte del proceso. Poco a poco irá mejorando
                  `}
        titlethree={"Indicaciones"}
      />
      <ExerciseCard
        title={
          <h4>
            Perfetti fase <br /> intermedia
          </h4>
        }
        pathImage={PERFETTI.two}
        onepart={"Para este ejercicio debe estar el paciente en un lugar cómodo, de preferencia sentado. Se trabajará dependiendo la zona afectada. Si es miembros superiores, el cuidador, sujetará el brazo del paciente, le movilizará totalmente y le colocará en 3 posiciones. Posición 1 levemente separado de su cuerpo. Posición 2 hará una perpendicular al cuerpo (brazo estirado a 90°). Posición 3 alzado todo lo que pueda. Estas tres posiciones son claves pues gracias a ellas se hará el ejercicio."}
        titleone={"Para Iniciar"}
        twopart={"Se repetirán 10 veces con los ojos abiertos para posteriormente, hacerlo con los ojos cerrados. Si el paciente presenta alteración en miembros inferiores, se realiza lo mismo, pero con movimientos de flexionar (doblar) o extender (estirar) la rodilla."}
        titletwo={"Proceso"}
        threepart={"El ejercicio debe realizarse 3 veces por semana. 4 series de 10 repeticiones. Las dos primeras series deberán ser con los ojos abiertos (1 serie con cada lado del cuerpo) y las dos últimas serán con los ojos cerrados. El cuidador moverá el segmento corporal y le pedirá que indique en qué posición está (1, 2 o 3). Si está incorrecto, se le indicará nuevamente y se le pedirá que observe el movimiento hasta adaptarlo.Debe ir acompañado con respiración correcta siempre, y entre cada serie realice una pausa de 5 minutos."}
        titlethree={"Indicaciones"}
      />
    </section>
  );
}
