import React from 'react'
import solution from '../../assets/images/solution.svg'
import Button from '../Button/Button'

const Upcoming = () => {
    return (
        <>
            <div className="upcoming">
                <div className="container">
                    <div className="upcoming_box">
                        <h2 className="upcoming_title">
                            <span>Уже более 5 лет мы </span>помогаем бизнесу раскрывать свой потенциал через IT-консалтинг
                            и современные <span>цифровые решения.</span>
                        </h2>
                        <div className="upcoming_card">
                            <Button title={"О компании"}/>
                            <Button title={"Миссия, ценности и цели"}/>
                            <Button title={"Команда"}/>
                            <Button title={"Карьера"}/>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <img src={solution} alt="" className='upcoming_img' />
            </div>
        </>
    )
}

export default Upcoming
