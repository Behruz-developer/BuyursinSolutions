import React from 'react';
import nikolay from "../../assets/images/nikolay.png";
import aleksandr from "../../assets/images/alexsandr.jpg";
import vitya from "../../assets/images/vitya.avif";
import left from "../../assets/images/rightPrev2.png";
import right from "../../assets/images/rightPrev.png";
import useTeamStore from '../../store/teamStoree';

const Team = () => {
  const people = [
    {
      name: "Алексей Смирнов",
      profession: "Менеджер IT-проектов",
      text: "Алексей обладает более чем 10-летним опытом в сфере управления IT-проектами. За свою карьеру он успешно реализовал более 50 проектов различного масштаба и сложности. Благодаря его лидерским качествам и стратегическому подходу, было запущено свыше 15 стартапов. Он также инвестировал в более чем 5 перспективных инициатив, поддерживая развитие инновационных решений на ранних стадиях.",
      image: nikolay,
      stats: {
        projectsCompleted: "50+",
        startupsLaunched: "15+",
        investments: "5+",
      },
    },
    {
      name: "Дмитрий Кузнецов",
      profession: "Основатель стартапов",
      text: "Дмитрий — серийный предприниматель, который запустил более 15 успешных стартапов в сферах технологий, образования и электронной коммерции. Он участвовал в разработке и реализации более 50 проектов, обеспечивая их выход на рынок. Дмитрий активно работает с командами и инвесторами, помогая трансформировать идеи в устойчивые бизнес-модели. Его профессиональный опыт делает его ценным партнёром в любом инновационном проекте.",
      image: aleksandr,
      stats: {
        projectsCompleted: "43+",
        startupsLaunched: "32+",
        investments: "5+",
      },
    },
    {
      name: "Игорь Соловьёв",
      profession: "Инвестор и бизнес-наставник",
      text: "Игорь — опытный инвестор и ментор, который помог множеству стартапов на этапе становления. Он вложил средства в более 5 быстрорастущих компаний и оказал влияние на развитие более 15 проектов. Игорь принимал участие в запуске свыше 50 стартапов, предоставляя стратегическую и менторскую поддержку. Его глубокое понимание рынка и предпринимательства делает его надёжным советником для молодых команд.",
      image: vitya,
      stats: {
        projectsCompleted: "12+",
        startupsLaunched: "23+",
        investments: "5+",
      },
    },
  ];

  const { item, setItem } = useTeamStore();

  const handlePrev = () => {
    setItem(item - 1, people.length);
  };

  const handleNext = () => {
    setItem(item + 1, people.length);
  };

  const currentPerson = people[item];

  return (
    <div className="team">
      <div className="container">
        <div className="team_box">
          <h2 className="team_title">Наша Команда</h2>
          <div className="team_box_header">
            <p className="team_subtitle">
              Мы создали сплочённую и профессиональную команду специалистов, страстно увлечённых технологиями, и продолжаем активно развивать их таланты.
            </p>
            <p className="team_subtitle2">
              Наша компания насчитывает около 50 сотрудников, и прибыльих число продолжает расти. Специалисты имеют более 2900 сертификатов от ведущих международных производителей ИТ-решений.
              Мы гордимся безупречной репутацией, доверием клиентов, уважением профессионального сообщества и заслуженной лояльностью сотрудников.
            </p>
          </div>
          <div className="team_line"></div>
          <div className="team_box_bottom">
            <div className="team_box_bottom_card">
              <p className="team_box_bottom_card_name">{currentPerson.name}</p>
              <p className="team_box_bottom_card_profession">{currentPerson.profession}</p>
              <p className="team_box_bottom_card_text">{currentPerson.text}</p>
              <div className="team_box_bottom_card_stats">
                <p className="team_box_bottom_card_stats_item">
                  {currentPerson.stats.projectsCompleted} завершённых проектов
                </p>
                <p className="team_box_bottom_card_stats_item">
                  {currentPerson.stats.startupsLaunched} запущенных стартапов
                </p>
                <p className="team_box_bottom_card_stats_item">
                  {currentPerson.stats.investments} инвестиций
                </p>
              </div>
            </div>
            <div className="team_box_bottom_slide">
              <button className="team_box_bottom_slide_button" onClick={handlePrev}>
                <img src={left} alt="Previous" className="team_box_bottom_slide_left" />
              </button>
              <img
                src={currentPerson.image}
                alt={currentPerson.name}
                className="team_box_bottom_slide_image"
              />
              <button className="team_box_bottom_slide_button" onClick={handleNext}>
                <img src={right} alt="Next" className="team_box_bottom_slide_right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
