interface AlertProps {
  header: string;
  message: string;
  onClick: (caption: string) => void;
}
function Alert({ header, message, onClick }: AlertProps) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{header}</strong> {message}.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => onClick("")}
      ></button>
    </div>
  );
}

export default Alert;
