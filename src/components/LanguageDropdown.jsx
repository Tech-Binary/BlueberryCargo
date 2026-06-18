import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

function LanguageDropdown() {
  const [lang, setLang] = useState("ENG");

  const changeLanguage = (language) => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = language;
      select.dispatchEvent(
        new Event("change", { bubbles: true })
      );

      setLang(language === "fr" ? "FRA" : "ENG");
    }
  };

  return (
    <div className="dropdown">
      <button
        className="lang-btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <FiGlobe />
        <span>{lang}</span>
        <MdKeyboardArrowDown />
      </button>

      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
        </li>

        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("fr")}
          >
            Français
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageDropdown;