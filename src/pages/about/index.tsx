import React, { useEffect, useState, useContext } from 'react';
import './index.scss';
import {LanguageStore} from '../../App';
import {Button, ButtonType} from '../../components/button';
import {UpcomingEvents} from '../../components/upcoming_events';
import Banner from '../../components/banner';

import history from '../../history';

interface AboutProp {
  lang: String;
}

function information(lang: String){
  switch(lang){
    case 'EN': 
       return ["Cuban born, Antonio Llaca is an active conductor, teacher, and "+
       "clinician.  He studied conducting and classical guitar both in Canada "+
       "and in South America. Mr. Llaca holds a Master’s degree in Choral "+
       "Conducting from Université de Sherbrooke (Montreal) and has studied "+
       "with world renowned masters.",
       "In 2019 Mr. Llaca was appointed Director of Choral Activities at "+
       "Carleton University where he conducts the choirs and teaches choral "+
       "and instrumental conducting. He is also a professor at the "+
       "Conservatoire de Musique de Gatineau where he conducts the choirs and "+
       "orchestra. Since 2009, Mr. Llaca has conducted Coro Vivo Ottawa (CVO). "+
       "In addition to this, he often collaborates with numerous ensembles and"+
       " prepares choruses for Canadian orchestras and artists such as The "+
       "Tenors and touring international orchestras such as the China "+
       "Broadcasting Chinese Orchestra. His choral ensembles have performed at "
       +"the national and international stage including, the National Arts "+
       "Centre, Canada, the Tintqiao Performing Arts Centre, China, and "+
       "Carnegie Hall, USA. His choirs have been award recipients at "+
       "international choral competitions. ",
       "Mr. Llaca is sought-after choral clinician, having had a chance to "+
       "present workshops at various Canadian and international institutions"+
       " and festivals including with the International Federation for Choral"+
       " Music (IFCM) in Beijing 2018. As an instrumentalist, he is often "+
       "called to perform at several festivals and instrumental ensembles "+
       "across Canada including the National Arts Centre Orchestra in Ottawa "+
       "and Montreal's Orchestre Métropolitain.",
       "Mr. Llaca is an advocate for Canadian choral music, incorporating prominent Canadian content in his programming, as well as commissioning choral pieces for his concerts from local composers. He has been known for his innovative programming of new works as well as seldom-performed works of music. In addition, Mr. Llaca has brought to the Ottawa music scene seldom performed works by New World early music composers such as William Billings, Esteban Salas, José Angel Lamas, and Manuel de Zumaya, among others.",
       "Mr. Llaca has toured in Canada, Latin America and Asia with his ensembles.  He has earned a reputation for being a passionate conductor and pedagogue who is regarded for his musicality and knowledge of the choral art. Mr Llaca’s 2019-2020 season will include performances with visiting choral ensembles from USA and the Czech Republic, a joint performance of the Brahms Requiem with the Orchestre Symphonique de Gatineau and will lead a conference on Cuban choral music at the PODIUM national conference in Montreal, Canada."
     ];
    case 'FR': 
      return ["Antonio Llaca est né à Cuba. C’est un chef de chœur, un enseignant et un clinicien dynamique. Il a étudié la direction musicale et la guitare classique tant au Canada qu’en Amérique du Sud. M. Llaca détient une maîtrise en direction chorale de l’Université de Sherbrooke (campus Montréal). Il a étudié auprès de maîtres de renommée mondiale.",
              "En 2019, M. Llaca a été nommé directeur des activités chorales à l’Université Carleton, où il dirige les chœurs et enseigne la direction chorale et la direction instrumentale. Il est aussi professeur au Conservatoire de musique de Gatineau, où il dirige les chœurs et l’orchestre. \n Depuis 2009, M. Llaca dirige aussi Coro Vivo Ottawa (CVO). De plus, il collabore souvent avec de nombreux ensembles et prépare des chœurs en vue de prestations avec des orchestres canadiens et des artistes comme The Tenors ainsi que des orchestres internationaux en tournée, tels que le China Broadcasting Chinese Orchestra. Ses ensembles chorals ont chanté sur les scènes tant nationale qu’internationale, notamment au Centre national des Arts (Canada), au Centre des arts d’interprétation Tintqiao (Chine) et à Carnegie Hall (É.-U.).  Ses chorales ont été primées lors de concours internationaux de chant choral.",
              "M. Llaca est un clinicien choral de renom qui a eu la chance de présenter des ateliers dans divers établissements et festivals canadiens et internationaux, entre autres à la Fédération internationale de la musique chorale (FIMC), à Beijing, en 2018. En tant qu’instrumentiste, il est souvent appelé à jouer dans le cadre de plusieurs festivals et dans divers ensembles instrumentaux un peu partout au Canada, y compris dans l’orchestre du Centre national des Arts, à Ottawa, et l’Orchestre Métropolitain de Montréal.",
              "Comme M. Llaca a à cœur de promouvoir la musique chorale canadienne, il intègre du contenu canadien de prestige dans sa programmation et il commande des pièces chorales pour ses concerts auprès de compositeurs locaux. M. Llaca est connu pour sa programmation innovatrice d’œuvres nouvelles ainsi que d’œuvres rarement interprétées. En outre, sur la scène musicale d’Ottawa, il a fait connaître des œuvres rarement exécutées des premiers compositeurs du Nouveau Monde, tels que William Billings, Esteban Salas, José Angel Lamas et Manuel de Zumaya.",
              "M. Llaca a effectué des tournées au Canada, en Amérique latine et en Asie avec ses ensembles. Il a acquis une réputation de chef de chœur et de pédagogue passionné, reconnu pour sa musicalité et sa connaissance de l'art choral. La saison 2019-2020 sous la baguette de M. Llaca comprendra des prestations avec des ensembles chorals en visite des États-Unis et de la République tchèque, ainsi qu’une interprétation conjointe du Requiem de Brahms en collaboration avec l'Orchestre symphonique de Gatineau. M. Llaca dirigera également une conférence sur la musique chorale cubaine au congrès national PODIUM, à Montréal (Canada)."
    ];
    case 'SP': 
      return ["Nacido en La Habana, Cuba, Antonio Llaca es un activo director coral, pedagogo y tallerista en quien la música ha sido una forma de conocer la vida. El Profesor Llaca estudió dirección coral y guitarra clásica a través de un extenso camino que recorre el Caribe, la América del Sur y Canadá. Realizó su maestría en Dirección Coral en la Universidad de Sherbrooke, Montreal, y ha estudiado con maestros de renombre mundial.",
      "Con una filosofía musical que invita a pensar el arte coral como actividad humana y estilo de vida que define nuestro mundo social, económico, histórico y cultural, el Sr. Llaca es un defensor de la música coral canadiense. En esta particular propuesta de hacer música y aprender música, el Sr. Llaca ha apostado por un contenido canadiense prominente en su programación, logrando integrar comisiones corales en sus conciertos de compositores locales. Su atractiva y atípica oferta musical, motivada por una programación innovadora de nuevas obras, le ha valido el reconocimiento de colegas, artistas y público en general. En ello, el Sr. Llaca ha promovido una programación de obras musicales raramente interpretadas, trayendo a la escena canadiense obras de compositores de música antigua como William Billings, Esteban Salas, José Ángel Lamas y Manuel de Zumaya, entre otros.",
      "El Sr. Llaca ha ayudado a crear una tradición coral única en Ottawa, siendo considerado por la comunidad de música coral canadiense como un director enérgico y creativo. Desde 2019, el Sr. Llaca se desempeña como Director de Actividades Corales en la Universidad de Carleton, en Ottawa, Canadá, donde dirige los coros e imparte cursos de dirección coral e instrumental. También es profesor del Conservatorio Superior de Música de Gatineau, Quebec, donde dirige los coros y la orquesta. Desde 2009 dirige Coro Vivo Ottawa (CVO) y a menudo colabora con numerosos conjuntos y prepara coros para orquestas y artistas canadienses, como The Canadian Tenors, y orquestas en giras internacionales, como la China Broadcasting Chinese Orchestra. Sus conjuntos corales han actuado en el escenario canadiense e internacional, incluyendo el National Arts Centre, Canadá; el Tintqiao Performing Arts Center, China; y el Carnegie Hall, EE. UU. Sus coros han sido galardonados en concursos corales internacionales.",
      "Paralelamente, El Sr. Llaca es un tallerista coral muy solicitado y ha dictado conferencias en varias instituciones y festivales canadienses e internacionales, entre los que destaca la Federación Internacional de Música Coral (IFCM) en Beijing 2018. Asimismo, como instrumentista colabora con la Orquesta del Centro Nacional de las Artes en Ottawa y la Orquesta Metropolitana de Montreal, además de otros renombrados ensambles instrumentales en todo Canadá.",
      "El Sr. Llaca ha recorrido Canadá y ha viajado extensamente a América Latina y Asia con sus conjuntos ganándose la reputación de ser un director y pedagogo apasionado a quien, por su musicalidad y conocimiento del arte coral, codician. Su oferta musical para la temporada 2019-2020 incluye actuaciones con conjuntos corales visitantes de EE. UU, la República Checa, así como una actuación conjunta del Réquiem de Brahms con la Orquesta Sinfónica de Gatineau. A esta atrevida y demandante agenda se suma un taller sobre música coral cubana que dictará en la conferencia nacional PODIUM en Montreal, Canadá."
    ]
    default: 
      return ["", ""];
  }
}

export default function About(props: AboutProp) {
  const [about, setAbout] = useState([""]);
  let aboutText = about.map((item, i) => {
    return <p key={i}>{item}</p>;
  });
  
  useEffect(() => {
    let info = information(props.lang);
    setAbout(info);
  }, [props.lang]);
  

  return (
  <div className="about container">
    <div className="sub-container container">
      <h1>Biography</h1>
      {aboutText.slice(0,3)}
      {Banner({lang: props.lang})}
      {aboutText.slice(3)}
    </div>
  </div>)
}