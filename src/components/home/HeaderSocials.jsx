import React from 'react';


const HeaderSocials = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/bryan_rany/" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/punreach-rany-developer/" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/13942929/punreach-rany" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-stack-overflow"></i>
        </a>
        <a href="https://github.com/punreachrany" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>
    </div>
  )
}

export default HeaderSocials