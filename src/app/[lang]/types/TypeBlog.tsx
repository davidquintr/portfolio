import { ReadTimeResults } from "reading-time";

type IBlog = {
  title: string;
  description: string;
  date: Date;
  slug: string;
  stats: ReadTimeResults;
  tags: string[];
};

export default IBlog;
