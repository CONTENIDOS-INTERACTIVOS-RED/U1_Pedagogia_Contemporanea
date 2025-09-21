export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Pedagogía contemporánea',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aprendizaje por proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y fundamentos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etapas del aprendizaje por proyectos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aplicaciones en educación infantil',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aprendizaje Basado en Problemas (ABP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamentos del ABP',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características del docente facilitador',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diseño de situaciones problema en infancia',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aprendizaje colaborativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios del aprendizaje colaborativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Dinámicas de trabajo grupal en infancia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Beneficios del aprendizaje entre pares',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Galindo Ferrández, E. & García Fernández, O. (2024). Aprendizaje basado en proyectos: un aprendizaje basura para el proletariado: (1 ed.). Ediciones Akal.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/254919',
    },
    {
      referencia:
        'Blanchard Giménez, M. & Muzás, M. D. (2020). Cómo trabajar con proyectos de aprendizaje en educación infantil: ( ed.). Narcea Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170326',
    },
    {
      referencia:
        'Trujillo, F. (2014). Aprendizaje basado en proyectos: infantil, primaria y secundaria: ( ed.). Ministerio de Educación y Formación Profesional de España.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114145',
    },
    {
      referencia:
        'Arguelles, D., & Nagles, N. (2007). Estrategias para promover procesos de aprendizaje autónomo. Colombia: Alfaomega.  ',
      link: 'https://www.redalyc.org/pdf/206/20619966015.pdf',
    },
    {
      referencia:
        'Bender, W. (2012). Project-Based Learning: Differentiating Instruction for the 21st Century.California: Corwin. ',
      link: 'https://eric.ed.gov/?id=ED530398 ',
    },
    {
      referencia:
        'Sandoval, L. A. (2017). El aprendizaje por proyectos: una experiencia pedagógica para la construcción de espacios de aprendizaje dentro y fuera del aula. Ensayos Pedagógicos, 12(1), 51-68.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6095686 ',
    },
    {
      referencia:
        'Vergara Ramírez, J. J. (2021). Un aula, un Proyecto: el ABP y la nueva educación a partir de 2020: ( ed.). Narcea Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/188154',
    },
    {
      referencia:
        'Escribano González, A. (Coord.) & Valle, Á. D. (Coord.). (2010). Aprendizaje Basado en Problemas (ABP): una propuesta metodológica en educación superior: ( ed.). Narcea Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/102005',
    },
    {
      referencia:
        'Morales Bueno, P., & Landa Fitzgerald, V. (2004). Aprendizaje basado en problemas.  ',
      link: 'http://148.202.167.116:8080/xmlui/handle/123456789/574',
    },
    {
      referencia:
        'Guamán Gómez, V. J., & Espinoza Freire, E. E. (2022). Aprendizaje basado en problemas para el proceso de enseñanza-aprendizaje. Revista Universidad y Sociedad, 14(2), 124-131. ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S2218-36202022000200124&script=sci_arttext&tlng=en ',
    },
    {
      referencia:
        'Garzón, F. (2017). El aprendizaje basado en problemas. Revista Educación y Desarrollo Social, 11(1), 8-23. ',
      link: 'https://revistas.umng.edu.co/index.php/reds/article/view/2897',
    },
    {
      referencia:
        'Bernal Bravo, C. Santoveña Casal, S. (Coord.) & Álvarez González, B. (2020). Investigación e innovación en metodologías digitales basadas en el aprendizaje conectado, activo y colaborativo: ( ed.). UNED - Universidad Nacional de Educación a Distancia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/173777 ',
    },
    {
      referencia:
        'Collazos, C. A. (2006). Cómo aprovechar el “aprendizaje colaborativo” en el aula. Educación y Educadores, 9 (2), 61-76: ( ed.). D - Universidad de La Sabana.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/16209',
    },
    {
      referencia:
        'Campos Perales, P. E. (2009). El aprendizaje colaborativo: una opción para los docentes de la disciplina preparación para la defensa. En: Selección de ponencias presentadas en Universidad 2010: ( ed.). Editorial Universitaria.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/85047',
    },
    {
      referencia:
        'Vargas, K., Yana, M., Perez, K., Chura, W., & Alanoca, R. (2020). Aprendizaje colaborativo: una estrategia que humaniza la educación. Revista Innova Educación, 2(2), 363-379.  ',
      link: 'http://revistainnovaeducacion.com/index.php/rie/article/view/85',
    },
    {
      referencia:
        'Collazos, C. A., & Mendoza, J. (2006). Cómo aprovechar el" aprendizaje colaborativo" en el aula. Educación y educadores, 9(2), 61-76. t ',
      link:
        'http://www.scielo.org.co/scielo.php?pid=s0123-12942006000200006&script=sci_arttex',
    },
    {
      referencia:
        'Vásquez Becerra, D. A. (2018). El aprendizaje colaborativo en niños del nivel primaria.  ',
      link:
        'https://repositorio.untumbes.edu.pe/items/d66c8023-6b16-47d5-8f7a-2cd59f9addcd',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'ABP (Aprendizaje Basado en Problemas)',
      significado:
        'Estrategia que parte de un problema real o simulado para desarrollar habilidades de análisis, pensamiento crítico y resolución.',
    },
    {
      termino: 'Aprendizaje activo',
      significado:
        'Enfoque que involucra al estudiante en su proceso formativo mediante participación, reflexión y construcción de conocimiento.',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Estrategia en la que los estudiantes trabajan juntos para lograr objetivos comunes, compartiendo responsabilidades y conocimientos.',
    },
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso en el que el nuevo conocimiento se relaciona con saberes previos, generando comprensión profunda y duradera.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad del estudiante para tomar decisiones, autorregular su aprendizaje y asumir responsabilidades en su proceso educativo.',
    },
    {
      termino: 'Competencia',
      significado:
        'Conjunto de conocimientos, habilidades, actitudes y valores que permiten resolver situaciones en contextos reales.',
    },
    {
      termino: 'Constructivismo',
      significado:
        'Corriente pedagógica que sostiene que el aprendizaje se construye activamente a partir de la experiencia y la interacción.',
    },
    {
      termino: 'Docente mediador',
      significado:
        'Figura que orienta, acompaña y facilita el aprendizaje, promoviendo la participación activa y crítica del estudiante.',
    },
    {
      termino: 'Enfoque centrado en el estudiante',
      significado:
        'Modelo pedagógico que pone al alumno como protagonista del proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Proceso continuo que busca retroalimentar al estudiante para mejorar su aprendizaje y desempeño.',
    },
    {
      termino: 'Interacción social',
      significado:
        'Relación entre personas que permite construir conocimiento y desarrollar habilidades comunicativas y emocionales.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de estrategias y procedimientos organizados para guiar el proceso de enseñanza y aprendizaje.',
    },
    {
      termino: 'Pedagogía contemporánea',
      significado:
        'Corriente que incorpora enfoques actualizados, flexibles e inclusivos, en respuesta a los cambios sociales y tecnológicos.',
    },
    {
      termino: 'Proyecto pedagógico',
      significado:
        'Propuesta de enseñanza que integra diferentes saberes a través de actividades organizadas en torno a una pregunta o problema.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Habilidad para analizar situaciones, identificar causas y proponer soluciones pertinentes y argumentadas.',
    },
  ],
}
