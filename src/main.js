import { createSiteMenuTemplate } from "./view/site-menu.js";
import { createUserRankTemplate } from "./view/user-rank.js";
import { createSortTemplate } from "./view/sort.js";
import { createFilmsContainerTemplate } from "./view/film-container.js";
import { createFilmCardTemplate } from "./view/film-card.js";
import { createShowButtonTemplate } from "./view/show-button.js";
import { createMorePopupTemplate } from "./view/more-popup.js";
import { createExtraFilmsTemplate } from "./view/extra-films.js";

const FILM_COUNT = 5;

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserRankTemplate(), `beforeend`);
render(siteMainElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmsContainerTemplate(), `beforeend`);
const filmsContainerElement = document.querySelector(`.films-list__container`);
for (let i = 0; i < FILM_COUNT; i++) {
    render(filmsContainerElement, createFilmCardTemplate(), `beforeend`);
}
render(siteMainElement, createShowButtonTemplate(), `beforeend`);