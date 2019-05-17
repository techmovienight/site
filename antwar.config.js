const path = require("path");
const EVENT_NAME = "Tech Movie Night";

module.exports = {
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
    context: {
      helmet: {},
    },
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "404.html": page("404", {
      description: "Page was not found",
      title: "Page not found",
    }),
    "/": page("index", {
      title: EVENT_NAME,
      description: `${EVENT_NAME} is a monthly meetup for Viennese tech enthusiasts.`,
    }),
  },
};

function page(name, meta = {}, parameters) {
  const ret = () => {
    let pageComponent = require(`./pages/${name}`).default;

    if (parameters) {
      pageComponent = pageComponent(parameters);
    }

    pageComponent.description = meta.description;
    pageComponent.title = meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
