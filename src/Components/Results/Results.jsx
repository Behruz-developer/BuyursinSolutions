import React from 'react'
import results from '../../assets/images/results.png'
import { GoArrowUpRight } from "react-icons/go";
import Button from '../Button/Button';


const Results = () => {
  return (
    <>
      <div className="results">
        <div className="container">
          <div className="results_box">
            <div className="results_box_top">
              <div className="results_box_top_card">
                <h4 className="results_box_top_card_title">20+</h4>
                <p className="results_box_top_card_text">лет успешной <br />работы на рынке</p>
              </div>
              <div className="results_box_top_card">
                <h4 className="results_box_top_card_title">400+</h4>
                <p className="results_box_top_card_text">экспертов <br />и консультантов</p>
              </div>
              <div className="results_box_top_card">
                <h4 className="results_box_top_card_title">500+</h4>
                <p className="results_box_top_card_text">успешно реализовано <br /> проектов</p>
              </div>
              <img src={results} alt="" className='results_img' />
            </div>
            <div className="results_line"></div>
            <div className="results_box_bottom">
              <div className="results_box_bottom_card">
                <p className="results_box_bottom_card_text">
                  Наша цель — быть надёжным партнёром в области
                  IT-консалтинга и предлагать передовые решения для повышения прибыльности вашего бизнеса.
                </p>
                <p className="results_box_bottom_card_text">
                  We know how to make IT-consulting great again
                </p>
              </div>
              <div className="results_box_bottom_card">
                <p className="results_box_bottom_card_text2">
                  Реализуем проекты по IT-консалтингу, направленные на оптимизацию и автоматизацию бизнес-процессов. Также оказываем консультации по разработке и внедрению
                  IT-решений с последующей поддержкой.
                </p>
                <Button title='Подробнее' icon={<GoArrowUpRight className='results_icon'/>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Results
