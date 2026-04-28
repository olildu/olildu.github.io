const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {year} Ebin Santhosh</p>
    </footer>
  );
};

export default Footer;
