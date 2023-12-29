import { Tech } from "./TypeTechStack";

type IProject = {
  title: string;
  description: string;
  techs: Tech[];
  gallery: string[];
  sourceLink: string;
  moreLink: string;
  onlineLink: string;
  index: number;
};

export default IProject;
