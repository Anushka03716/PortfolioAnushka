import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='service-title'>
        <h1>My services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className='service_container'>
        {Services_Data.map((service, index) => {

          const ServiceCard = (
            <div className='service-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

              <div className='services-readmore'>
                <p>{service.link ? "View on GitHub" : "Read More"}</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          )

          return service.link ? (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link-wrapper"
            >
              {ServiceCard}
            </a>
          ) : (
            <div key={index}>
              {ServiceCard}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services

