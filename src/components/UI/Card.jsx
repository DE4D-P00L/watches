const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`shadow-lg p-2 flex flex-col items-center flex-1 text-center ${className} hover:bg-[#f06d48] transition-all`}>
      {children}
    </div>
  );
};
export default Card;
