import { useConfigContext } from "./config_provider";


const Tags = ({tag }) => {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  return (
    <>
      {tag?.map((tagElement, index) => {
        return (
          <div className={`tag ${lightModeActive}`} key={index}>
            <p>{tagElement}</p>
          </div>
        );
      })}
    </>
  );
};

export default Tags;
