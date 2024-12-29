interface FooterProps {
  header: string;
  message: string;
}
function Footer({ header, message }: FooterProps) {
  return (
    <div className="row m-2 bg-dark text-white justify-content-center text-center">
      {message} <strong>{header}</strong>
    </div>
  );
}

export default Footer;
