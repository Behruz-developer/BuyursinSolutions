import React from 'react';
import { FaHeadset } from "react-icons/fa";
import officeImage from '../../assets/images/offise.jpg';
import useLanguageStore from '../../store/languageStore';

const tabs = [
    { title: 'История компании', image: officeImage, text: 'Компания Buyursin Solutions успешно работает на IT-рынке уже 5 лет. Мы обладаем передовой экспертизой в областях больших данных, облачных технологий, ИИ, интегрированных коммуникаций, разработки ПО, блокчейна, BIM, сетей 5G и акселерации стартапов. В нашем портфеле более 20 собственных продуктов и решений на базе передовых технологий, обеспечивающих стабильную работу IT-инфраструктуры наших клиентов.За эти годы мы успешно реализовали более 150 проектов, направленных на совершенствование бизнес-процессов. Мы гордимся своей репутацией и стремимся к непрерывному совершенствованию, создавая компанию вокруг счастливых и мотивированных людей.' },
    { title: 'Миссия компании', image: officeImage, text: 'Наша миссия — предоставлять качественные услуги клиентам.' },
    { title: 'Ценности компании', image: officeImage, text: 'Мы ценим честность, инновации и устойчивое развитие.' },
    { title: 'Цели компании', image: officeImage, text: 'Наша цель — стать лидером в отрасли к 2030 году.' },
];

const About = () => {
    const { activeTab, setActiveTab } = useLanguageStore();
    const tabCount = tabs.length;
    return (
        <div className="about">
            <div className="container">
                <div className="about_box">
                    <div className="about_box_header">
                        <h2 className='about_title'>O Buyursin Solutions</h2>
                        <a href='#!' className="about_consultation">
                            <FaHeadset />Запросить консультацию
                        </a>
                    </div>
                    <div className="about_box_tab">
                        <div className="about_box_tab_content_line" >
                            <div
                                className="active_line"
                                style={{
                                    width: `${100 / tabCount}%`,
                                    left: `${(100 / tabCount) * activeTab}%`
                                }}
                            ></div>
                        </div>
                        <div className="about_box_tab_content">
                            {tabs.map((tab, index) => (
                                <p
                                    key={index}
                                    className={`about_box_tab_content_title ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.title}
                                </p>
                            ))}
                        </div>
                        <div className="about_box_tab_info">
                            <p className="about_box_tab_info_text">{tabs[activeTab].text}</p>
                            <img src={tabs[activeTab].image} alt="" className='about_box_tab_info_img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
