import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useConfigContext } from "./config_provider";

const Panel = ({isProject, pureArray, setElement, element, pureFilter}) => {
  const [filters, setFilters] = useState([]);
  const [btnFilters, setBtnFilter] = useState([]);
  const panelRef = useRef(null);
  const [panelPos, setPanelPos] = useState(0);
  const panelScroll = useRef(null);

  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  function moveLeftPanel() {
    panelScroll.current.scrollTo({
      left: panelScroll.current.scrollLeft - 150,
      behavior: "smooth"
    });
  }
  
  function moveRightPanel() {
    panelScroll.current.scrollTo({
      left: panelScroll.current.scrollLeft + 150,
      behavior: "smooth"
    });
  }

  function handleReset() {

    if(btnFilters.length > 0){
      btnFilters.forEach((e) => {
        e.classList.remove("marked");
      })
    }

    window.scrollTo(window.scrollX, panelPos)
    setFilters([]);
    setElement(pureArray);
    console.log(panelPos)
} 

  
  function handleSearch(e) {
    window.scrollTo(window.scrollX, panelPos)
    let value = e.target.value.toLowerCase();
    let elementFiltered = isProject ? pureArray.filter(
      (p) =>
        p.title.toLowerCase().includes(value) ||
        language == "es" ? p.details.es.toLowerCase().includes(value) : p.details.eng.toLowerCase().includes(value)
    ) : pureArray.filter(
        (p) =>
          language == "es" ? p.title.es.toLowerCase().includes(value) : p.title.eng.toLowerCase().includes(value) ||
          language == "es" ? p.description.es.toLowerCase().includes(value) : p.description.eng.toLowerCase().includes(value)
      );
    
    console.log(isProject)
    console.log(elementFiltered)
    setElement(elementFiltered);
}

  
  function handleFilter(element, e) {
    const tempFilters = [...filters];
    const tempBtnFilters = [...btnFilters]
    const exists = tempFilters.find((it) => it === element);
    
    window.scrollTo(window.scrollX, panelPos)
    if (exists !== undefined) {
      tempFilters.splice(tempFilters.indexOf(exists), 1);
      tempBtnFilters.filter(bf => bf !== e)
      e.classList.remove("marked");
    } else {
      tempFilters.push(element);
      tempBtnFilters.push(e)
      e.classList.add("marked");
    }

    setFilters(tempFilters);
    setBtnFilter(tempBtnFilters)

    if (tempFilters.length < 1) {
      handleReset();
      return;
    }

    const elementFiltered = isProject ? pureArray.filter((item) =>
      tempFilters.every((filter) => item.tech.includes(filter.dim))
    ) : pureArray.filter((item) =>
    tempFilters.every((filter) => item.tags.includes(filter)));
    setElement(elementFiltered);
  }

  useEffect(()=>{
    if(panelPos != 0)
        return;

    const { top } = panelRef.current.getBoundingClientRect();
    setPanelPos(top - 74)
  }, [panelPos])
 

  return (
    <>
      <div className={`section-panel `} ref={panelRef}>
        <div className={`section-panel-control ${lightModeActive}`}>
          <button className={`filter-button-scroll left`} onClick={moveLeftPanel}>
            <span>&lt;</span>
          </button>
          <div ref={panelScroll} className="section-panel-tag">
            {pureFilter?.map((element, index) => (
              <button
                className={`filter-button`}
                key={index}
                onClick={(e) => handleFilter(element, e.currentTarget)}
              >
                <span>{isProject ? element.alt : element}</span>
              </button>
            ))}
            <button className={`filter-button reset`} onClick={() => handleReset()}>
              <span>Reset</span>
            </button>
          </div>
          <button
            className={`filter-button-scroll right`}
            onClick={moveRightPanel}
          >
            <span>&gt;</span>
          </button>
        </div>
        <div className={`section-panel-search ${lightModeActive}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-ssm"
          />
          <input type="text" onChange={(e) => handleSearch(e)}></input>
        </div>
      </div>
    </>
  );
};

export default Panel;
