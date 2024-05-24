const Footer = () => {
  return (
    <footer className="bg-gray-100" id="footer">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6  text-gray-800 flex-wrap flex justify-between">
        <div className="p-5">
          <div className="text-xs uppercase font-medium text-[#f06d48]">
            Our Information
          </div>
          <a className="my-3 block" href="/#">
            Products <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            About Us <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Pricing <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Store House
          </a>
        </div>
        <div className="p-5">
          <div className="text-xs uppercase text-[#f06d48] font-medium">
            About us
          </div>
          <a className="my-3 block" href="/#">
            About us <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Copyright <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Customer Support
          </a>
        </div>
        <div className="p-5">
          <div className="text-xs uppercase text-[#f06d48] font-medium">
            Support
          </div>

          <a className="my-3 block" href="/#">
            Help Center <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Return Policy <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Conditions <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div className="p-5">
          <div className="text-xs uppercase font-medium text-[#f06d48]">
            Contact info
          </div>

          <a className="my-3 block" href="/#">
            XXX XXXX, Floor 4 New Delhi, In
            <span className="text-teal-600 text-xs p-1"></span>
          </a>

          <a className="my-3 block" href="/#">
            contact@company.com
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="tel:+919876543210">
            +919876543210
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
