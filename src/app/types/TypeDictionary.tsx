type IDictionary = {
  lang: string;
  author: string;
  role: string;
  email: string;
  birthday: string;
  country: string;
  detail_item: {
    open: string;
    emailText: string;
    birthdayText: string;
    countryText: string;
    cvText: string;
  };
  navigation: Record<string, string>;
  footer: {
    credits: string;
    source: string;
  };
  home: {
    experience: {
      title: string;
      list: Record<string, { name: string; position: string; time: string }>;
    };
    about_me: {
      title: string;
      description: string;
    };
    personal_info: {
      title: string;
    };
  };
  projects: {
    title: string;
    onlineText: string;
    sourceText: string;
    moreText: string;
    list: any; // Replace with the appropriate type or import
  };
  blog: {
    title: string;
  };
  contact: {
    title: string;
    cta: string;
    direct_comm: string;
    form: {
      names: string;
      email: string;
      message: string;
      success: string;
      fail: string;
      send: string;
    };
  };
};

export default IDictionary;
