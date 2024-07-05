import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Expirence</h3>
        <span className="about__subtitle">2+ internship</span>
      </div>

      <div className="about__box">
      <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>

      <div className="about__box">
      <i className='bx bx-file about__icon'></i>
        <h3 className="about__title">Academic</h3>
        <span className="about__subtitle">9.6+ cgpa</span>
      </div>
      
    </div>
  )
}

export default Info
