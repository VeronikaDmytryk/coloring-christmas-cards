import React from "react"

export const Footer = () => {
    return (
        <footer>
            <div className="footer clearfix">
                <div className="container">
                    <p className="credentials">© 2018/ Designed and Developed by <a className="logo" href="http://veronikadmytryk.net">Veronika <span>Dmytryk</span></a></p>
                    <div className="social-links">
                        <ul className="social-links">
                            <li><a href="mailto:veronika.dmytryk@gmail.com"><i className="fa fa-envelope"></i></a></li>
                            <li><a href="https://github.com/VeronikaDmytryk" target="_blank"><i className="fa fa-github-square"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/veronika-dmytryk/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

  