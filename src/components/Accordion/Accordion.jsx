import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

import "./Accordion.css";


function Accordion({
  children,
  title,
  icon,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);


  function toggleAccordion() {
    setIsOpen((currentValue) => !currentValue);
  }


  return (
    <div
      className={`accordion ${
        isOpen ? "accordion--open" : ""
      }`}
    >

      <button
        type="button"
        className="accordion__trigger"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >

        <span className="accordion__trigger-left">

          {icon && (
            <span
              className="accordion__icon"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}

          <span className="accordion__title">
            {title}
          </span>

        </span>


        <ChevronDown
          className="accordion__chevron"
          size={25}
          strokeWidth={1.8}
          aria-hidden="true"
        />

      </button>


      <div className="accordion__content">

        <div className="accordion__content-inner">
          {children}
        </div>

      </div>

    </div>
  );
}


export default Accordion;