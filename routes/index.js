import home from '../modules/home/routes';
import catalog from '../modules/catalog/routes';
import warranty from '../modules/static/pages/warranty/routes';
import products from '../modules/products/routes';
import product from '../modules/product/routes';
import languages from '../utils/languages';
import contacts from '../modules/static/pages/contacts/routes';
import cooperation from '../modules/static/pages/cooperation/routes';
import privacyPolicy from '../modules/static/pages/privacyPolicy/routes';
import publicOffer from '../modules/static/pages/publicOffer/routes';
import newArticle from '../modules/static/pages/newsArticle/routes'
import blog from '../modules/static/pages/blog/routes'

const allRoutes = [home, catalog, products, warranty, product, contacts, cooperation, privacyPolicy, publicOffer, newArticle, blog];

(function () {
  const addLanguageToRoute = (route) => {
    const routeLangs = [];

    languages.forEach((language) => {
      const newRoute = {};

      if (route.isMain) {
        if (language.default) {
          newRoute.name = `${language.synonym}_${route.name}`;
          newRoute.path = `/${language.synonym}${route.path}`;
          newRoute.file = route.file;

          routeLangs.push(newRoute);
        }
      } else {
        if (!language.default) {
          newRoute.name = `${language.synonym}_${route.name}`;
          newRoute.path = `/${language.synonym}${route.path}`;
          newRoute.file = route.file;

          routeLangs.push(newRoute);
        }
      }
    });

    return routeLangs;
  };

  allRoutes.forEach((route) => {
    const newRoute = addLanguageToRoute(route);
    allRoutes.push(...newRoute);
  });
})();

export default allRoutes;
