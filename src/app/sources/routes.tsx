function provideRoutes(routes : any) {
  return [
    { href: "", text: routes.home },
    {
      href: "/experience",
      text: routes.experience,
    },
    { href: "/blog", text: routes.blog },
    {
      href: "/projects",
      text: routes.projects,
    },
    {
      href: "/contact",
      text: routes.contact,
    },
  ];
}

export default provideRoutes;
