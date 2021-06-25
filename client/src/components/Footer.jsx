function Footer() {
  return (
    <footer>
      <hr />
      {/* include linked logos for github and linkedin */}
      <a href="https://github.com/rararamberg" target="_blank">
        <i className="fab fa-github-square"></i>
      </a>
      <a href="https://www.linkedin.com/in/rachelramberg/" target="_blank">
        <i
          className="fab fa-linkedin"
          href="https://www.linkedin.com/in/rachelramberg/"
          target="_blank"
        ></i>
      </a>
      <p style={{ fontWeight: "bold" }}>© RAR 2021</p>
    </footer>
  );
}

export default Footer;
