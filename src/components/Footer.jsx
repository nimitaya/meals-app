const Footer = () => {
  return (
    <footer data-theme="night" className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Nimitaya
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
