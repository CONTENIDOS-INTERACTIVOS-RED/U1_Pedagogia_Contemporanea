<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Aprendizaje Basado en Problemas (ABP)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 ¿Qué ocurre cuando el aprendizaje nace de una dificultad real que debe resolverse con creatividad y trabajo en equipo?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En este nuevo recorrido, se propone descubrir el Aprendizaje Basado en Problemas (ABP), una metodología que convierte los retos en oportunidades para pensar, dialogar, investigar y actuar. A diferencia de las clases tradicionales, en el ABP no se parte de la respuesta, sino del problema: una situación cercana, posible y significativa que impulsa la búsqueda activa de soluciones.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Este enfoque promueve el desarrollo del pensamiento crítico, la colaboración entre pares y la construcción de conocimientos útiles para la vida. En el contexto de la educación infantil, se convierte en una herramienta poderosa para enseñar a los niños y las niñas a observar, preguntar, proponer y resolver, desde situaciones cotidianas que despiertan su interés y fortalecen su autonomía.
    
    p Durante esta experiencia, se invita a explorar cómo diseñar problemas pedagógicos adaptados a la infancia, cómo acompañar el proceso sin imponer soluciones, y cómo valorar cada avance como parte de un aprendizaje auténtico. Más que una técnica, el ABP es una manera de enseñar pensando con sentido.
    p.mb-5 ¡Adelante!


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Fundamentos del ABP

    p.mb-5 La comprensión de los fundamentos del Aprendizaje Basado en Problemas (ABP) representa un paso clave en la transformación de los procesos educativos hacia enfoques más activos, significativos y centrados en el estudiante.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Fundamentos del ABP
            p.mb-4(data-aos="fade-right") En el PDF <b>Fundamentos del ABP</b>, se presenta esta metodología desde su raíz constructivista, destacando su potencial para impulsar la indagación, la autonomía y el aprendizaje colaborativo en contextos reales. A través de ejemplos concretos y reflexiones pedagógicas, se invita a descubrir cómo el ABP puede ser una herramienta poderosa para formar estudiantes críticos, creativos y comprometidos con la construcción de conocimiento desde la infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Viabilidad económica.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Características del docente facilitador

    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 ¿Se ha pensado alguna vez en cómo cambia la experiencia de aprender cuando quien enseña deja de hablar tanto y empieza a escuchar más?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Esta pregunta invita a revisar profundamente el rol que tradicionalmente ha ocupado el docente en el aula. Durante años, se ha asumido que enseñar implica transmitir conocimientos de forma directa, desde una figura de autoridad que domina el contenido. Sin embargo, el Aprendizaje Basado en Problemas (ABP) propone una ruptura con ese modelo, dando paso a una pedagogía activa donde el centro es el estudiante y el docente asume un papel muy distinto: el de facilitador del aprendizaje.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 En este enfoque, no se trata de dictar lecciones ni de entregar respuestas acabadas. Por el contrario, se invita a orientar procesos, a acompañar de manera cercana y a generar las condiciones para que el conocimiento se construya desde la experiencia, el cuestionamiento y el trabajo colaborativo. Esta transformación del rol docente exige un conjunto de características que no solo responden a nuevas formas de enseñar, sino también a nuevas formas de entender la relación con quienes aprenden.

    .bg-full-width.bg-fondo-1
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="35%" y="51.5%" numero="+")
                h5 1.
                p Una primera característica clave es la capacidad para crear ambientes de confianza. El docente facilitador construye espacios donde se valora la voz del estudiante, se acepta el error como parte del proceso y se estimula la participación activa. Esto es especialmente importante en la educación infantil, donde la seguridad emocional es la base para cualquier experiencia significativa de aprendizaje.
    
              .bg-color-white.box-shadow.p-3(x="64%" y="18%" numero="+")
                h5 2.
                p Habilidad para plantear preguntas retadoras y abiertas, que movilicen el pensamiento crítico y generen discusiones genuinas. No se trata de preguntar para evaluar, sino para provocar curiosidad, reflexión y búsqueda. En este sentido, el facilitador es un mediador del diálogo, un provocador de ideas.
    
              .bg-color-white.box-shadow.p-3(x="87%" y="56%" numero="+")
                h5 3.
                p La escucha atenta y respetuosa. Escuchar a los estudiantes no solo permite conocer sus intereses, necesidades y formas de aprender, sino también reconocer el valor de sus ideas, su manera de ver el mundo y su lenguaje expresivo. Esta escucha genera vínculos auténticos, fortalece la empatía y enriquece el proceso pedagógico.
    
              .bg-color-white.box-shadow.p-3(x="39%" y="28%" numero="+")
                h5 4.
                p La flexibilidad es otra característica imprescindible. En el ABP, los caminos no siempre están definidos desde el principio. El docente debe estar dispuesto a modificar planes, integrar propuestas de los estudiantes, cambiar de rumbo si el grupo lo requiere y adaptar el contenido a la realidad que emerge en el aula. Esta apertura es especialmente valiosa cuando se trabaja con niños, cuyo aprendizaje está mediado por el juego, la exploración y la espontaneidad.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Asimismo, el docente facilitador actúa como observador e investigador permanente. Analiza el proceso, documenta los avances, interpreta los intereses del grupo y ajusta sus estrategias para mejorar continuamente. Este rol exige sensibilidad, mirada crítica y disposición al aprendizaje constante.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left")  Además, debe ser creativo y propositivo. El ABP requiere plantear problemas significativos, construir materiales diversos, generar situaciones desafiantes y ofrecer herramientas que estimulen el pensamiento y la acción. El facilitador no impone, pero sí propone, sugiere, abre horizontes.
    
        .bg-color-7.p-4(data-aos="fade-left").mb-5
          p  Por último, debe ser un modelo de respeto, colaboración y entusiasmo por aprender. Su actitud se convierte en referente para los estudiantes, especialmente en la infancia, donde el aprendizaje se construye también desde la imitación y la emoción.
          p.mb-0 En síntesis, el docente facilitador no es quien sabe todo, sino quien sabe acompañar. No es quien guía desde arriba, sino quien camina al lado. No es quien dicta, sino quien provoca. No es quien juzga, sino quien escucha, estimula, apoya y confía. Su tarea, lejos de ser secundaria, es profundamente transformadora.
        p En educación infantil, estas características adquieren un valor especial, pues los niños y las niñas aprenden más de lo que viven que de lo que se les dice. Un facilitador sensible, creativo y flexible puede sembrar experiencias que dejan huellas para toda la vida.
    
    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left").order-2
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿Se está dispuesto a ceder el protagonismo para ver florecer el aprendizaje en otros? 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿A confiar en que cada niño o niña puede construir su propio camino con el acompañamiento adecuado?
              p.mb-0 Ser docente facilitador implica una elección ética y pedagógica: se elige estar al servicio del proceso, reconocer al otro como constructor de sentido y acompañarlo con respeto, compromiso y alegría. Porque enseñar, en esta mirada, no es imponer contenidos, sino facilitar encuentros con el conocimiento, con los otros y consigo mismo.
            .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema2/10.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Diseño de situaciones problema en infancia

    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 ¿De qué manera se logra que un niño o una niña aprenda no porque se le dice qué hacer, sino porque genuinamente desea saber más?
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 El diseño de situaciones problema en la infancia permite responder a esa inquietud pedagógica con una propuesta activa, respetuosa y centrada en quien aprende. En lugar de transmitir conocimientos desde la autoridad, el Aprendizaje Basado en Problemas (ABP), propone generar experiencias reales o simuladas que despierten la curiosidad, movilicen el pensamiento y conecten con el mundo cercano de los niños. 
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Esta metodología, lejos de ser compleja o inalcanzable, puede adaptarse perfectamente a los primeros años escolares, siempre que se parta de una profunda comprensión de la infancia y sus modos de aprender (Guamán y Espinoza, 2022).
    
    p.mb-5 En términos generales, una situación problema es un punto de partida que propone un reto auténtico. No se trata de una simple consigna o una tarea para llenar, sino de un escenario pedagógico diseñado para activar el pensamiento crítico, el trabajo colaborativo, la expresión creativa y la solución de situaciones que tengan sentido para quien aprende.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p El primer paso para diseñar estas situaciones es observar con atención. Se requiere sintonizar con el grupo, identificar sus intereses, reconocer sus preguntas espontáneas y sus modos de interacción. En la infancia, el aprendizaje surge del asombro y del juego. Por eso, una nube de forma extraña, una mariposa herida, un vaso que se cae, o una pregunta sobre por qué llueve, pueden convertirse en oportunidades pedagógicas valiosas.
    
          .div(titulo="Paso 2")
            p Una vez identificado el punto de partida, se formula una pregunta generadora o un reto abierto. Es decir, se presenta un problema cuya solución no es única ni inmediata, y que permite múltiples caminos de exploración. Por ejemplo: ¿Cómo se puede construir una casa que no se caiga? ¿Por qué las plantas cambian de color? ¿Cómo se puede ayudar a un amigo que está triste? Estas preguntas invitan a buscar, conversar, experimentar, imaginar y crear.
    
          .div(titulo="Paso 3")
            p Enseguida, se diseña una secuencia de actividades que, respetando el ritmo de los niños, favorezcan la exploración desde diversos lenguajes: el juego simbólico, el dibujo, la observación directa, la conversación, la dramatización, la construcción, el movimiento, la lectura de imágenes o cuentos, entre otros. Lo importante es que las propuestas sean diversas, accesibles y motivadoras, y que se organicen en torno al problema planteado, no al revés.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En este proceso, el rol del docente es esencial. No se trata de dar respuestas, sino de acompañar con preguntas, ofrecer materiales, observar, escuchar, intervenir con sentido y documentar lo que ocurre. Un docente que facilita este tipo de experiencias necesita ser flexible, creativo y atento, capaz de adaptar su planeación a los intereses emergentes del grupo.
    
        .bg-color-7.mb-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 También debe garantizarse que las situaciones problema sean <b>inclusivas</b>. Es decir, que todos los niños, sin importar su estilo de aprendizaje, condición particular o nivel de desarrollo, puedan participar activamente. Para ello, se pueden ofrecer diferentes formas de expresión, tiempos diversos, apoyos visuales, ambientes ricos y materiales concretos.
        p Al finalizar el trabajo con una situación problema, es clave abrir un espacio de socialización y metacognición. Allí, los niños pueden compartir sus hallazgos, narrar su experiencia, hacer dibujos, mostrar construcciones o dramatizar lo aprendido. Este momento no solo permite consolidar aprendizajes, sino también valorar el proceso vivido, reconociendo los esfuerzos, las ideas y los logros del grupo.
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/16.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En síntesis, diseñar situaciones problema en la infancia implica comprender que los niños no aprenden porque se les entrega la respuesta, sino porque se les permite buscarla. El ABP no es solo una metodología; es una manera de mirar la infancia como etapa rica en potencial, capaz de preguntarse, de crear hipótesis, de investigar, de expresar lo que siente y de construir respuestas desde la experiencia (Garzón, 2017).

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-3(data-aos="fade-left")
          p.mb-0 ¿Se han diseñado experiencias que realmente conecten con la curiosidad de los niños, o se les pide aprender desde una lógica que no comprenden?
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 Diseñar situaciones problemáticas no requiere recursos costosos ni clases extraordinarias, sino una mirada pedagógica sensible, una escucha atenta y una actitud investigativa. Es sembrar preguntas que florezcan en forma de aprendizajes. Es permitir que los niños aprendan desde el asombro, desde lo cercano, desde lo que les importa. Y, sobre todo, es confiar en que incluso desde la infancia se puede pensar, resolver y transformar.







    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/70929 " target="_blank" rel="noopener noreferrer") Romero Gómez, A. (2011). Diseño de Ambientes Virtuales de Aprendizaje (AVA), con metodología de Aprendizaje Basado en Problemas (ABP): un modelo para el abordaje de contenidos y construcción de conocimiento en AVA: ( ed.). Fundación Universitaria del Área Andina.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://innovacioneducativa.upm.es/sites/default/files/guias/Aprendizaje_basado_en_problemas.pdf " target="_blank" rel="noopener noreferrer") de Innovación Educativa, S. (2008). Aprendizaje basado en Problemas. Guías rápidas sobre nuevas metodologías. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/libro?codigo=390108 " target="_blank" rel="noopener noreferrer") Moust, J. H., Bouhuijs, P. A., & Schmidt, H. G. (2007). El aprendizaje basado en problemas: guía del estudiante (Vol. 1). Univ de Castilla La Mancha.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=8499396 " target="_blank" rel="noopener noreferrer") Morocho, M. C., & Cordero, N. M. C. (2022). Aprendizaje Basado en Problemas y desarrollo de la lectura en niños de 7 años en Educación Intercultural Bilingüe: Estudio de caso. 593 Digital Publisher CEIT, 7(3), 42-52. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://didactia.grupomasterd.es/blog/numero-13/aprendizaje-basado-en-problemas-abp  " target="_blank" rel="noopener noreferrer") Aprendizaje basado en problemas (ABP). (s.f.). Blog | Didactia - MasterD. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://thinkinglab.com.co/blog/la-utilidad-del-aprendizaje-basado-en-problemas.html" target="_blank" rel="noopener noreferrer") La utilidad del Aprendizaje Basado en Problemas - Blog - ThinkingLab. (s.f.). ThinkingLab - Digital Innovation.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xcKlvkIxsVA " target="_blank" rel="noopener noreferrer") Gavilán, M. (2018, 14 de noviembre). Aprendizaje basado en problemas [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=DPIhyUAc0uE " target="_blank" rel="noopener noreferrer") Flipping First Project. (2017, 4 de octubre). Aprendizaje Basado en Problemas [Video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
