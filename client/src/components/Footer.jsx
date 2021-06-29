import './Footer.css'

function Footer() {
  return (
    <footer className='footer-div'>
      <hr />
      {/* include linked logos for github and linkedin */}
      <div className="social-div">

        <a href="https://github.com/rararamberg" target="_blank" rel="noreferrer">
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rachelramberg/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p style={{ fontWeight: "bold" }}>© RAR 2021</p>
    </footer>
  );
}

export default Footer;
