import React from 'react'
import {Slider} from 'antd'
import {CarFilled} from '@ant-design/icons'

const ConstraintSlider = (({iconType, value, onChange, text}) => {
    return (
    <section className="d-flex flex-column">
        <div className="d-flex w-100 align-items-center">
        <CarFilled className="font-1-5"/>
            <Slider className="w-100" value={value} min={0} max={60} onChange={onChange}/>
        </div>
        <span className="text-center">{text}</span>
    </section>
    )
})

export default ConstraintSlider
