<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aprendizaje colaborativo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") ¿Por qué los niños y las niñas aprenden más cuando trabajan juntos? En el mundo de la educación infantil, el aula se convierte en un espacio vivo donde el intercambio, la escucha y la cooperación no solo fortalecen el aprendizaje, sino que también construyen lazos humanos profundos.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Explorar el aprendizaje colaborativo es abrir la puerta a una forma de enseñar y aprender que valora al otro, que reconoce la diversidad como riqueza y que transforma los grupos en verdaderas comunidades de conocimiento (Bernal, Santoveña y Álvarez, 2020).
    
        .bg-color-6.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de este tema, se invita a reflexionar sobre el papel del educador como guía y mediador, así como sobre las estrategias y dinámicas que permiten a los niños construir saberes de manera conjunta, respetuosa y significativa.
        p Este es el momento de comprender cómo el trabajo entre pares impulsa habilidades claves como la comunicación, la empatía y el pensamiento crítico. Prepárese para descubrir cómo hacer del aula un espacio donde todos aprenden con todos. ¡Bienvenidos a este recorrido por el aprendizaje colaborativo!

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principios del aprendizaje colaborativo

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Qué sucede cuando los niños y las niñas aprenden juntos, no solo uno al lado del otro, sino unos con otros y gracias a los otros? Esta pregunta invita a profundizar en una de las estrategias más poderosas en el aula infantil: el aprendizaje colaborativo.
    
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Este enfoque propone que el aprendizaje se construye de forma más profunda, significativa y duradera cuando se desarrolla en interacción con los demás. A diferencia del trabajo en grupo tradicional, donde cada uno hace una parte y luego se unen los resultados, el aprendizaje colaborativo implica una participación activa, reflexiva, comprometida y equitativa por parte de todos los integrantes del grupo. Se aprende no solo el contenido, sino también a convivir, a escuchar, a negociar y a construir con el otro.
        p Veamos ahora los principios fundamentales que sustentan esta forma de aprender y enseñar:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Interdependencia positiva
              p Según Collazos (2006), en el aprendizaje colaborativo, cada miembro del grupo aporta algo valioso y necesario para que todos puedan avanzar. Esto quiere decir que nadie puede lograr el objetivo sin el otro. Este principio fomenta la responsabilidad compartida y el sentido de pertenencia. En educación infantil, se puede cultivar mediante tareas donde todos contribuyen a un mismo producto, como construir una maqueta, inventar una historia o cuidar una huerta escolar.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Responsabilidad individual y grupal
              p Aunque se trabaje de forma colectiva, cada niño o niña tiene responsabilidades claras dentro de la actividad. No se trata de diluir el compromiso, sino de integrarlo: el éxito del grupo depende del esfuerzo de todos. En este sentido, se promueve una actitud ética y solidaria que combina la autonomía con el respeto por los demás.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Interacción promotora
              p Los aprendizajes se potencian cuando los niños interactúan entre sí: cuando se explican cosas, se hacen preguntas, se dan ideas, se ayudan, se corrigen o se animan mutuamente. Esta interacción favorece el desarrollo del lenguaje, del pensamiento crítico y de la comprensión profunda. En la infancia, se estimula a través de juegos cooperativos, pequeños debates o actividades que requieran tomar decisiones grupales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo de habilidades sociales
              p Para que la colaboración funcione, se necesita enseñar explícitamente ciertas habilidades: escuchar con atención, esperar turnos, expresar emociones, resolver desacuerdos o reconocer logros ajenos. Estas competencias no solo mejoran la convivencia en el aula, sino que son fundamentales para la vida en sociedad. Trabajar en equipo desde la infancia favorece la empatía, la paciencia y la apertura a la diversidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Evaluación grupal y autorreflexión
              p El aprendizaje colaborativo también incluye momentos para detenerse, observar, valorar el proceso y hacer ajustes. Reflexionar sobre lo vivido permite aprender no solo del contenido, sino de cómo se trabajó: ¿Se escucharon todos? ¿Se respetaron las ideas? ¿Qué se podría mejorar? Estas preguntas invitan a pensar críticamente y a fortalecer la metacognición desde edades tempranas.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-7.p-5(data-aos="fade-left")
          p En el contexto de la educación infantil...
          p.mb-0 El aprendizaje colaborativo no solo es posible, sino deseable. Los niños y las niñas, por naturaleza, aprenden en relación con los demás. El juego, el diálogo, la curiosidad compartida y la resolución conjunta de situaciones cotidianas hacen del aula un espacio donde la colaboración se convierte en la base del desarrollo integral. Como futuro educador o educadora, se invita a diseñar experiencias que integren estos principios en actividades auténticas, significativas y afectivas (Campos, 2009).

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿En qué momento del día los niños aprenden más colaborando? 
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué situaciones cotidianas del aula pueden convertirse en oportunidades para fortalecer el trabajo en equipo? 
    
    p.mb-5 Se propone observar, experimentar y diseñar estrategias donde el conocimiento no se imponga, sino que se descubra y se construya entre todos. Porque educar colaborativamente no es solo una metodología: es una forma de habitar la escuela, de convivir y de construir comunidad desde la infancia.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Dinámicas de trabajo grupal en infancia
    
    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 ¿Qué sucede cuando se permite que los niños y las niñas piensen, jueguen y creen en conjunto? 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Esta pregunta invita a descubrir el enorme potencial que tiene el trabajo colaborativo en la infancia. Desde edades muy tempranas, los seres humanos aprenden observando, imitando y, sobre todo, interactuando. Sin embargo, el hecho de que los niños compartan el mismo espacio no garantiza que estén realmente colaborando. Es por ello que, desde la pedagogía, se deben diseñar e implementar dinámicas grupales estructuradas, intencionadas y emocionalmente significativas.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Según Vargas, Yana, Pérez, Chura y Alanoca (2020), el trabajo grupal no solo fortalece los aprendizajes cognitivos; también desarrolla habilidades sociales, emocionales y comunicativas que son fundamentales para la vida. En la educación infantil, este tipo de experiencias debe partir de lo lúdico, lo creativo y lo afectivo, permitiendo que los niños sean protagonistas activos y valorados dentro del grupo. 
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema3/15.svg" data-aos="zoom-in" style="max-width: 90px")

    p Así, se logra que aprender juntos sea también una forma de crecer juntos.
    p A continuación, se presentan algunas dinámicas claves que favorecen el aprendizaje colaborativo en las primeras edades:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Juegos cooperativos con propósito común")
            p Los juegos donde todos ganan, donde la meta se alcanza gracias a la participación de todos, son una excelente forma de enseñar colaboración. Se pueden proponer actividades como construir una torre con bloques entre todos, resolver un laberinto en el patio, armar un mural colectivo o superar una serie de retos motrices en equipo. Estos juegos desarrollan coordinación, empatía, comunicación y responsabilidad compartida.
    
          .div(titulo="Creación colectiva de relatos, canciones o personajes")
            p En lugar de trabajar en forma individual, se puede invitar a crear una historia entre varios niños, donde cada uno aporta una idea o un fragmento. También pueden inventar una canción juntos, crear diálogos para una marioneta o imaginar un personaje fantástico con diferentes características que todos proponen. Esta dinámica estimula la creatividad, el respeto por las ideas del otro y la construcción conjunta de sentido.
    
          .div(titulo="Proyectos integradores por equipos")
            p Los proyectos permiten articular varias áreas del conocimiento. Por ejemplo, construir una granja, organizar una feria del juego, crear una obra de teatro o sembrar un huerto escolar. Al asignar tareas por equipos y favorecer la participación activa, se desarrolla la autonomía, el liderazgo y el sentido de pertenencia al grupo. Cada paso del proyecto se convierte en una oportunidad para dialogar, negociar y decidir en conjunto.
    
          .div(titulo="Rondas de diálogo y acuerdos grupales")
            p Realizar asambleas o círculos de la palabra, donde se pueda conversar sobre lo que les gustó, lo que desean cambiar o cómo se sintieron, es fundamental para fomentar la expresión y el respeto por la voz de cada niño. Estas rondas ayudan a construir acuerdos grupales, establecer normas de convivencia y desarrollar habilidades de escucha activa y resolución pacífica de conflictos.
          .div(titulo="Tareas colaborativas con materiales concretos")
            p Actividades como ordenar objetos por colores entre varios, construir una figura con piezas geométricas, resolver un rompecabezas gigante o clasificar elementos de la naturaleza (piedras, hojas, semillas) en pequeños equipos promueven la coordinación grupal, el lenguaje matemático, la observación y la toma de decisiones compartida.

    h2(data-aos="fade-left").mb-5 ¿Por qué son tan importantes estas dinámicas en la infancia?

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Porque a través de ellas, los niños y las niñas aprenden a respetar turnos, a compartir materiales, a cuidar al compañero y a valorar el esfuerzo colectivo. Se desarrollan así competencias ciudadanas, emocionales y éticas que perdurarán en su vida futura. El trabajo grupal, bien orientado, convierte el aula en una pequeña comunidad donde se aprende a vivir con otros, a ser solidario, a construir juntos el conocimiento y el afecto.
    
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 Además, estas dinámicas permiten al educador observar cómo interactúan los niños, identificar líderes naturales, niños más tímidos o aquellos que requieren apoyo para integrarse, lo que aporta información valiosa para ajustar las prácticas pedagógicas con inclusión y sensibilidad.

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .bg-full-width.bg-color-7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center.p-4.p-lg-0
            .col-lg-7(data-aos="fade-left").order-2
              p.mb-0 ¿Qué condiciones se deben generar para que el trabajo en grupo no se vuelva caótico o excluyente? ¿Cómo se pueden adaptar estas dinámicas a diferentes edades, intereses y características del grupo? Se invita a observar el aula como un espacio vivo de relaciones, donde cada dinámica tiene el poder de transformar no solo el aprendizaje, sino también la forma en que los niños construyen su identidad en comunidad. Porque aprender juntos es también aprender a ser, a convivir y a transformar el mundo desde las primeras experiencias educativas.
            .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/18.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Beneficios del aprendizaje entre pares

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/19.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.p-3(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué ocurre cuando un niño enseña a otro? 
        p(data-aos="fade-left") Esta pregunta permite reconocer que, en la infancia, el aprendizaje no ocurre solo en relación con el adulto. Por el contrario, muchas de las experiencias más significativas nacen en el vínculo entre iguales. El aprendizaje entre pares es una estrategia pedagógica que promueve la colaboración horizontal, donde los niños no solo reciben conocimiento, sino que también lo construyen y lo comparten con sus compañeros.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          p A diferencia del modelo tradicional, en el que el maestro ocupa un lugar central como fuente exclusiva de saber, este enfoque reconoce que todo niño es portador de saberes, experiencias y formas de ver el mundo, y que estas pueden ser valiosas para los demás. Desde temprana edad, los niños explican, imitan, se preguntan y resuelven conflictos en grupo.
          p(data-aos="fade-left") Cuando estas interacciones son potenciadas con intencionalidad pedagógica, se convierten en oportunidades poderosas de aprendizaje (Collazos y Mendoza, 2006).
        p Según Vásquez (2018), implementar esta estrategia en la educación infantil no significa restar protagonismo al docente, sino reconfigurar su rol como mediador y facilitador, para que las experiencias entre pares sean seguras, respetuosas y formativas. Los beneficios de esta práctica son múltiples y abarcan:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consolidación del conocimiento
              p Cuando un niño explica algo a otro, debe organizar sus ideas, seleccionar palabras claras, encontrar ejemplos. Este ejercicio fortalece su comprensión y le permite reafirmar lo que ha aprendido, convirtiéndose en un proceso de doble ganancia: quien explica también aprende.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Incremento de la confianza y autoestima
              p Al sentirse útil y capaz de ayudar a otro, el niño fortalece su autoconcepto y su seguridad. A su vez, quien recibe la ayuda lo hace en un ambiente más relajado, libre de juicios, lo cual reduce la ansiedad y promueve una actitud positiva frente al aprendizaje.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo de habilidades comunicativas
              p El aprendizaje entre pares fomenta la escucha activa, la formulación de preguntas, la explicación clara y el respeto por los turnos. Estas competencias comunicativas son esenciales en el desarrollo integral y se fortalecen de manera natural en contextos colaborativos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Práctica de valores y actitudes prosociales
              p El trabajo con otros implica negociar, ceder, esperar, animar y aceptar. Estas actitudes fomentan la empatía, la solidaridad y el respeto por la diversidad, valores claves en la formación ética desde la infancia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fomento de la autonomía y la metacognición
              p Al enseñar a un par, el niño toma decisiones sobre qué y cómo explicar. Esta toma de conciencia sobre su propio proceso lo convierte en un aprendiz más autónomo y reflexivo, capaz de regular su pensamiento y sus emociones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Construcción de un clima afectivo y seguro en el aula
              p El aprendizaje entre pares fortalece los lazos de amistad, crea un ambiente cálido y cooperativo, y disminuye las barreras entre los estudiantes. Se genera un sentimiento de pertenencia y corresponsabilidad en la experiencia educativa.
    
    h2(data-aos="fade-left") ¿Cómo se puede aplicar esto en la educación infantil?
    p.mb-5 Algunas actividades que favorecen el aprendizaje entre pares incluyen:

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center.p-4.p-lg-0
            .col-lg-7(data-aos="fade-left").order-2
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Juegos de roles donde uno “enseña” a otro.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Lectura compartida en duplas o pequeños grupos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Parejas colaborativas para resolver un reto o construir algo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Rondas donde cada uno comparte cómo resolvió una actividad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Actividades de tutoría entre niños de diferentes niveles o edades.
              p.mb-0 Lo importante es que estas experiencias sean cuidadosamente acompañadas por el docente, quien observa, orienta y asegura que todos participen activamente y se sientan incluidos. El rol adulto aquí es clave: diseñar los escenarios, moderar los intercambios y fomentar una cultura del respeto mutuo.
            .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/28.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 ¿Qué valor se le da al conocimiento que circula entre los niños? 
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 ¿Qué experiencias se han vivido donde un niño ha enseñado a otro con éxito? 
          p.mb-0 Se invita a reconocer que cada niño tiene algo que aportar, algo que decir y algo que enseñar. Al favorecer el aprendizaje entre pares, no solo se mejora la comprensión académica, sino que se siembran semillas de solidaridad, respeto y confianza que perdurarán más allá del aula.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/228697 " target="_blank" rel="noopener noreferrer") Rodríguez Rojas, M. L. (Dir.) & Solórzano Cahuana, H. R. (2022). Programa fortaleciendo las habilidades comunicativas en el aprendizaje colaborativo de estudiantes del 5° grado de Institución Educativa N° 2063, 2021: (1 ed.). D - Universidad César Vallejo. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/55651 " target="_blank" rel="noopener noreferrer") Hernández Martín, A. (2012). Metodologías de aprendizaje colaborativo a través de las tecnologías: ( ed.). Ediciones Universidad de Salamanca. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.unad.edu.co/handle/10596/65271 " target="_blank" rel="noopener noreferrer") Mojica Diaz, A. M. (2024). Experiencias de Aprendizaje Colaborativo para Favorecer Habilidades Sociales en los Niños y las Niñas de Grado Primero del Suzhou Science and Technology Town Foreign Language School de China, entre Agosto 2023-Abril 2024. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ispring.es/blog/aprendizaje-colaborativo " target="_blank" rel="noopener noreferrer") Aguilera, C. (2023, 25 de octubre). Aprendizaje colaborativo: qué es, ventajas y ejemplos. Blog de E-learning. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.evolmind.com/blog/importa-trabajo-colaborativo-e-learning/ " target="_blank" rel="noopener noreferrer") El aprendizaje colaborativo, la clave del e-learning. (s.f.). EvolMind. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=8rBiBPGU0nE " target="_blank" rel="noopener noreferrer") Servicio de Planificación y Mejora de la Docencia. (2019, 31 de octubre). El Aprendizaje Cooperativo- Rubic [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=0_GSJ_8OIRw " target="_blank" rel="noopener noreferrer") Canal TIC. (2020, 6 de julio). Aprendizaje Colaborativo [Video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Las situaciones problema en la infancia deben tener una única respuesta correcta y ser dirigidas por el docente.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '2.	¿Cuál de las siguientes es una característica clave del diseño de situaciones problema en la educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uso exclusivo de fichas impresas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Preguntas con respuesta cerrada',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Conexión con el entorno y los intereses del niño',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Evaluación final con examen escrito',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El rol del docente en el diseño de situaciones problema es guiar, observar y facilitar, no imponer respuestas.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué elementos debe incluir una situación problema en la infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluaciones estandarizadas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Consignas largas y técnicas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Actividades ligadas al juego y la exploración',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Explicaciones magistrales extensas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
