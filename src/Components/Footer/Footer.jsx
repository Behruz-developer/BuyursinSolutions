import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import correct from "../../assets/images/correct.png";


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_box">
                        <div className="footer_header">
                            <div className="footer_header_card">
                                <h2 className='footer_title'>Карьера в Buyursin Solutions </h2>
                                <p className="footer_subtitle">Предоставляем IT-консалтинг по внедрению 1С согласно международным стандартам.</p>
                            </div>
                            <a href="#!" className='footer_btn'>
                                Хочу в команду <BsArrowRightCircle className='footer_btn_icon' />
                            </a>
                        </div>
                        <div className="footer_line"></div>
                        <div className="footer_bottom">
                            <div className="footer_bottom_card">
                                <img src={correct} alt="" className='footer_bottom_card_img' />
                                <div className="footer_bottom_card_box">
                                    <p className="footer_bottom_card_box_title">
                                        Масштабные проекты
                                    </p>
                                    <p className="footer_bottom_card_box_text">
                                        работаем с крупными заказчиками, в том числе с международными компаниями
                                    </p>
                                </div>
                            </div>
                            <div className="footer_bottom_card">
                                <img src={correct} alt="" className='footer_bottom_card_img' />
                                <div className="footer_bottom_card_box">
                                    <p className="footer_bottom_card_box_title">
                                        Нетиповые решения
                                    </p>
                                    <p className="footer_bottom_card_box_text">
                                        наши специалисты не являются «заложниками» одного направления
                                    </p>
                                </div>
                            </div>
                            <div className="footer_bottom_card">
                                <img src={correct} alt="" className='footer_bottom_card_img' />
                                <div className="footer_bottom_card_box">
                                    <p className="footer_bottom_card_box_title">
                                        Система наставничества
                                    </p>
                                    <p className="footer_bottom_card_box_text">
                                        опираясь на многолетний опыт и экспертизу, поможем выстроить ваш личный карьерный трек
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
