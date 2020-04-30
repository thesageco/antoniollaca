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
      return ["SP_ABOUT"]
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