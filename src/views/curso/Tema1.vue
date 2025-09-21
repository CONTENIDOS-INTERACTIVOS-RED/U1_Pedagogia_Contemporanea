<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Aprendizaje por proyectos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") ¿Qué pasaría si en lugar de repetir contenidos, los niños y las niñas fueran los protagonistas de su propio aprendizaje? En esta unidad, se invita a descubrir el poder del aprendizaje por proyectos, una metodología que parte de la curiosidad infantil para transformar el aula en un laboratorio de experiencias vivas y significativas.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Explorar, preguntar, construir y crear son acciones esenciales en la infancia. El aprendizaje por proyectos retoma estas formas naturales de aprender para integrarlas en propuestas pedagógicas que respondan a los intereses reales de los niños. No se trata solo de enseñar, sino de crear condiciones para que el saber emerja del juego, la investigación y la colaboración.
        p(data-aos="fade-left") A lo largo de este recorrido, se tendrá la oportunidad de analizar las etapas de esta metodología, comprender el rol del docente como mediador y proponer actividades pensadas para contextos reales de la educación infantil. Esta es una invitación a mirar la enseñanza desde una nueva perspectiva: más flexible, más humana y más cercana a la vida.
        p Se anima a asumir esta experiencia con mente abierta y sensibilidad pedagógica. El mundo infantil está lleno de preguntas… empecemos.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y fundamentos
    
    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 ¿Qué pasaría si en lugar de planear cada paso del aprendizaje para los niños, se les diera la oportunidad de construirlo con sus propias preguntas, intereses y curiosidades?
    
    p.mb-5 Desde esa idea nace el Aprendizaje por Proyectos (APP): 

    .bg-full-width.bg-fondo-slider
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              p Una metodología activa que sitúa al estudiante en el centro del proceso educativo. Lejos de una enseñanza rígida y uniforme, este enfoque propone que el aprendizaje se construya a partir de una pregunta significativa que despierte la curiosidad y dé sentido a lo que se va a trabajar en el aula (Arguelles, 2007).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              p Se está frente a una estrategia que articula saberes de distintas áreas en torno a un tema común. No se trata de hacer “una actividad bonita” para cerrar una unidad, sino de vivir un proceso con etapas claras: preguntar, planear, investigar, crear y compartir. Todo comienza con una inquietud real, muchas veces planteada por los propios niños, y se transforma en un proyecto que evoluciona a medida que se avanza. Aquí, el docente no es quien “lo sabe todo”, sino quien guía, escucha y propone recursos y experiencias que amplían la mirada del estudiante.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              p Este enfoque se fundamenta en el constructivismo, que sostiene que el conocimiento no se transmite, sino que se construye activamente. También se apoya en la pedagogía activa, la cual valora la participación del niño, su capacidad de decidir, proponer, investigar y trabajar junto a otros.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              p Según Bender (2012), en la educación infantil, el APP permite atender la diversidad del aula. Cada niño aprende a su ritmo, con lo que le interesa y le motiva. El proyecto da lugar a la expresión, al juego, a la exploración, y, sobre todo, al sentido de lo que se aprende. Se fomenta así un aprendizaje significativo, porque conecta con la vida del niño y lo involucra emocional y cognitivamente.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 En este modelo, el docente tiene un rol clave: escuchar activamente, observar, orientar y provocar situaciones de aprendizaje sin imponer respuestas. El estudiante, por su parte, aprende haciendo, descubriendo, preguntando, experimentando. El conocimiento no llega por repetición, sino por búsqueda y reflexión (Sandoval, 2017).

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se ha considerado, cómo cambiaría el aprendizaje, si en lugar de iniciar con un tema, se comenzará con una pregunta?
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se está dispuesto a dejar que los niños guíen parte del camino y se apropien de su proceso de aprendizaje?
    
    p.mb-5 El aprendizaje por proyectos no es solo una técnica, es una forma de ver la educación desde el respeto, la curiosidad y la creatividad. Y usted, como futuro docente, ¿qué tipo de experiencias desea generar en el aula?

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Etapas del aprendizaje por proyectos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Qué pasaría si los niños pudieran aprender investigando lo que realmente les interesa, descubriendo respuestas en lugar de repetirlas?
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 El Aprendizaje por Proyectos (APP), es una metodología transformadora porque no se centra en enseñar contenidos fragmentados, sino en organizar experiencias completas y reales de aprendizaje (Galindo y García, 2024). 
        p Para que un proyecto tenga sentido pedagógico, es fundamental seguir una secuencia lógica que oriente el proceso desde la pregunta inicial hasta la socialización final. A continuación, se presentan sus principales etapas, cada una con su intención y dinámica particular.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Formulación de la pregunta generadora")
            p Todo proyecto significativo nace de una pregunta. No cualquier pregunta, sino una que despierte genuina curiosidad y esté conectada con la vida de los niños. Esta puede surgir del diálogo, la observación, un interés común del grupo o una situación del entorno.
            h5 Ejemplos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ¿Cómo nacen las mariposas?
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ¿Para qué sirve el agua?
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ¿Qué comen los animales del bosque?
            p El docente tiene aquí un rol clave: escuchar, acompañar y ayudar a traducir esas inquietudes en temas que permitan explorar múltiples saberes y habilidades.
    
          .div(titulo="Planeación del proyecto")
            p Una vez elegida la pregunta, es necesario organizar el camino. En esta etapa se diseñan las actividades, se identifican los recursos necesarios, se definen los espacios de trabajo y se establecen los tiempos.
            p No se trata de planear para el estudiante, sino de planear con él, respetando sus ideas, intereses y nivel de desarrollo. La participación activa de los niños, incluso en la fase organizativa, les da sentido de pertenencia sobre el proyecto.
            p Esta planificación debe ser flexible, abierta al cambio, y permitir conexiones entre diferentes áreas: lenguaje, matemáticas, ciencias, arte, juego, entre otras.

    
          .div(titulo="Desarrollo ")
            p Aquí ocurre el corazón del proceso: explorar, experimentar, investigar, construir, crear. Esta etapa puede incluir diversas estrategias:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Observación directa.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Conversatorios.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Juegos simbólicos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Salidas pedagógicas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Actividades artísticas y de expresión.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Creación de maquetas, cuentos, dibujos, grabaciones.
            p Los niños participan de manera activa y significativa. No se les entrega una respuesta: se les acompaña a encontrarla por sí mismos. El docente sigue cumpliendo un rol de mediador, ofreciendo materiales, preguntas orientadoras y espacios de reflexión.
            p Es recomendable documentar este proceso: tomar fotografías, grabar videos, registrar frases, recopilar producciones infantiles. Esa documentación será clave para visibilizar el aprendizaje y hacer evaluación formativa.

    
          .div(titulo="Cierre y socialización")
            p Todo aprendizaje necesita un momento de cierre. Esta etapa permite organizar lo aprendido, expresarlo, compartirlo y celebrarlo. Puede hacerse en forma de exposición, galería, obra de teatro, feria de proyectos, video colectivo, presentación a las familias u otra estrategia.
            p Más allá del producto final, el cierre permite que los niños reconozcan lo que han logrado, valoren el trabajo en grupo y se sientan protagonistas de su propio proceso. También es una oportunidad para reflexionar sobre lo vivido y pensar en nuevos interrogantes que puedan dar origen a futuros proyectos.
    
    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.p-5(data-aos="fade-left").mb-3
          p(data-aos="fade-left") ¿Se ha considerado alguna vez cómo cambia el aprendizaje cuando los niños no solo reciben información, sino que la descubren a través de sus propios intereses?
          p.mb-0 El aprendizaje por proyectos no es una técnica decorativa, es una forma profunda de entender la enseñanza, porque combina emoción, pensamiento, interacción social y acción.
        
        p.mb-0 Se invita, desde esta perspectiva, a diseñar experiencias pedagógicas que partan de la vida, conecten con la infancia y favorezcan aprendizajes duraderos. Cuando se aprende con propósito, se aprende para siempre.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Aplicaciones en educación infantil
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Qué sucede cuando los intereses de los niños se convierten en el punto de partida del aprendizaje y no en algo añadido al final del currículo?
    
        .bg-color-7.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Aprendizaje por Proyectos (APP), ofrece una posibilidad única de transformar el aula infantil en un espacio donde la imaginación, la curiosidad y la realidad se entrelazan. En lugar de partir de temas impuestos o de contenidos desarticulados, este enfoque propone que el conocimiento emerja de preguntas significativas surgidas de los propios niños, y que se desarrolle a través de experiencias auténticas y participativas (Blanchard y Muzás, 2020).
        p Para implementar esta metodología en el nivel infantil, lo primero que debe tenerse en cuenta es que el juego, la exploración, la expresión artística y la conversación son las principales formas de aprender. Por tanto, cualquier proyecto debe integrarse naturalmente a estas dinámicas. Se recomienda que los temas sean cercanos, tangibles, visuales y efectivamente conectados con la vida de los niños.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Un grupo de niños se pregunta por qué llueve. A partir de ahí, nace un proyecto sobre el ciclo del agua, que puede incluir experimentos con recipientes, juegos de simulación, dibujos, relatos e incluso la elaboración de una maqueta.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p En otro caso, una niña comenta que su perro tuvo crías. Este hecho cotidiano puede transformarse en un proyecto sobre los animales domésticos, explorando sus cuidados, hábitat, sonidos y necesidades.
    
    p.mb-5 Como puede verse, los proyectos no son unidades cerradas, sino oportunidades para integrar áreas del conocimiento, fortalecer habilidades sociales, desarrollar el lenguaje y promover actitudes como la empatía, el respeto por la naturaleza y la cooperación.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Trujillo (2014), el docente, en este contexto, no actúa como transmisor de conocimientos, sino como mediador, provocador y facilitador. Se encarga de escuchar activamente a los niños, identificar intereses comunes, proponer materiales, diseñar experiencias significativas y acompañar el proceso desde una mirada respetuosa y flexible.
        p(data-aos="fade-left") Además, se espera que observe con atención, documente los avances, propicie momentos de diálogo y retroalimentación, y adapte el proyecto, según las necesidades emergentes del grupo.
        p Cuando se trabaja por proyectos, no solo se desarrollan contenidos académicos. También se fortalecen habilidades como:  
    
    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center La observación y el análisis.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center La comunicación verbal y no verbal.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/22.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center El trabajo en equipo.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center La toma de decisiones.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center El respeto por las ideas ajenas.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema1/25.png' alt='AvatarTop' , style="max-width: 330px").mx-auto.mb-3
                p.text-center La capacidad de asombro y reflexión.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/19.png', alt='')

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Todo esto, enmarcado en experiencias concretas, hace que el aprendizaje no sea solo significativo, sino también emocionalmente memorable.
        

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 ¿Se ha considerado el impacto que tiene en un niño, participar en un proceso donde su opinión, su curiosidad y su voz son el centro?
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Cuando se aplican proyectos en la educación infantil, se está sembrando una semilla de autonomía, creatividad y pensamiento crítico. Se construye un espacio donde el error no se castiga, sino que se valora como parte del proceso; donde el docente no impone, sino que acompaña; donde el aula no repite el mundo, sino que lo reinventa desde los ojos de la infancia.
    
        .bg-color-1.p-5(data-aos="fade-left")
          p Como futuro docente, se invita a diseñar escenarios pedagógicos que respeten la riqueza del pensamiento infantil. Porque cuando se aprende desde el interés genuino, el conocimiento no solo se entiende: se siente, se vive y se recuerda.
          p.mb-0 Luego de explorar el aprendizaje por proyectos como una metodología centrada en la curiosidad y la experiencia significativa, se da paso ahora al Aprendizaje Basado en Problemas (ABP), otra estrategia activa que invita a pensar, analizar y resolver situaciones reales desde una mirada crítica y colaborativa.







    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/243866 " target="_blank" rel="noopener noreferrer") Grimaldo, A. (Coord.) & Guerra, E. (Coord.). (2023). La imaginación en los proyectos de aprendizaje: alcances y prácticas de la educación imaginativa: (1 ed.). Ediciones Morata, S. L. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/225139  " target="_blank" rel="noopener noreferrer") Chamorro Guerrero, E. F. Cárdenas Estupiñan, J. A. & Melo Rosero, L. F. (2022). Formación humana competente: experiencias de aprendizaje basado en proyectos: (1 ed.). Universidad Mariana. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/46200  " target="_blank" rel="noopener noreferrer") Blanchard Giménez, M. & Jiménez Seco, M. (2016). Transformando la sociedad desde las aulas: metodología de aprendizaje por proyectos para la innovación educativa en El Salvador: ( ed.). Narcea Ediciones. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rieoei.org/rie/article/view/1775  " target="_blank" rel="noopener noreferrer") Borrego, V. Á., Otero, V. D. C. H., Flores, M. M., & González, M. T. R. (2010). Trabajo por proyectos: aprendizaje con sentido. Revista Iberoamericana de educación, 52(5), 1-13. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://colombia.universidadeuropea.com/blog/aprendizaje-basado-proyectos/  " target="_blank" rel="noopener noreferrer") Aprendizaje basado en proyectos: qué es y ejemplos | UE Colombia. (s.f.). Universidad Europea colombia. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.bechallenge.io/guia-practica-implementar-aprendizaje-basado-en-proyectos/ " target="_blank" rel="noopener noreferrer") Guía Práctica: Implementar Aprendizaje Basado en Proyectos | Bechallenge. (s.f.). Bechallenge | Aprendizaje por Retos. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9v__mKc4C3U " target="_blank" rel="noopener noreferrer") universidadurjc. (2020, 2 de diciembre). #TIECL: Aprendizaje basado en proyectos (ABP) [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4hqJMDGV7NU " target="_blank" rel="noopener noreferrer") INTEF. (2020, 1 de junio). Vídeo 1.3. Qué es el ABP y claves de un buen proyecto - Retos de la semana [Video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
