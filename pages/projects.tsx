import ProjectsItem from "./components/project_item";
import technologies from "./assets/json/technologies.json";
import pureProject from "./assets/json/projects_en.json";
import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  const [project, setProject] = useState([]);
  const [filters, setFilters] = useState([]);
  const [btnFilters, setBtnFilter] = useState([])
  const panelRef = useRef(null);
  const [panelPos, setPanelPos] = useState(0)
  const panelScroll = useRef(null)


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

    const projectFiltered = pureProject.filter((project) =>
      tempFilters.every((filter) => project.tech.includes(filter.dim))
    );

    setProject(projectFiltered);
  }

  function handleSearch(e) {
    window.scrollTo(window.scrollX, panelPos)

    let value = e.target.value.toLowerCase();
    let projectFiltered = pureProject.filter(
      (p) =>
        p.title.toLowerCase().includes(value) ||
        p.details.toLowerCase().includes(value)
    );
    setProject(projectFiltered);
  }

  function handleReset() {

    if(btnFilters.length > 0){
      btnFilters.forEach((e) => {
        e.classList.remove("marked");
      })
    }

    window.scrollTo(window.scrollX, panelPos)
    setFilters([]);
    setProject(pureProject);
  }
  
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

  useEffect(() => {
    let orderProject = pureProject.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
    );
    const { top } = panelRef.current.getBoundingClientRect();
    setPanelPos(top - 74)
    setProject(orderProject);
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="Portfolio | Projects"></meta>
        <meta
          property="og:description"
          content="Frontend developer portfolio."
        ></meta>
        <meta
          property="og:image"
          content="https://davidquintr.github.io/portfolio/thumbnail.png"
        ></meta>
        <meta
          property="og:url"
          content="https://davidquintr.github.io/portfolio/"
        ></meta>
      </Head>
      <article className="article article-base extended">
        <NavBar></NavBar>
        <PageWrapper>
          <section className="section section-projects">
            <div className="section-title">
              <h2>Projects</h2>
            </div>

            <div className="section-panel" ref={panelRef}>
              <div className="section-panel-control">
                <button className="filter-button-scroll left" onClick={moveLeftPanel}>
                  <span>&lt;</span>
                </button>
                <div ref={panelScroll} className="section-panel-tag">
                  {technologies?.map((element, index) => (
                    <button
                      className="filter-button"
                      key={index}
                      onClick={(e) => handleFilter(element, e.currentTarget)}
                    >
                      <span>{element.alt}</span>
                    </button>
                  ))}
                  <button className="filter-button" onClick={() => handleReset()}>
                    <span>Reset</span>
                  </button>
                </div>
                <button className="filter-button-scroll right" onClick={moveRightPanel}>
                  <span>&gt;</span>
                </button>
              </div>
              <div className="section-panel-search">
              <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="fa-ssm color-blue"
                />  
                <input type="text" onChange={(e) => handleSearch(e)}></input>
              </div>
            </div>

            <div className="section-body projects">
              {project?.map((element, index) => (
                <ProjectsItem key={index} element={element} index={index} />
              ))}
            </div>
          </section>
        </PageWrapper>
      </article>
    </>
  );
}
