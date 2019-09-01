import {getRandDate, getRandIntBetween, getRandBool} from "./helpers";

const card = {
  descriptions: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  get description() {
    return this.descriptions[getRandIntBetween(0, this.descriptions.length - 1)];
  },
  get dueDate() {
    return getRandDate(new Date(2019, 7), new Date(2019, 8, 31));
  },
  repeatingDays: {
    Mo: getRandBool(),
    Tu: getRandBool(),
    We: getRandBool(),
    Th: getRandBool(),
    Fr: getRandBool(),
    Sa: getRandBool(),
    Su: getRandBool(),
  },
  get isRepeating() {
    return getRandBool();
  },
  tagsList: [
    `homework`,
    `theory`,
    `practice`,
    `catfishing`,
    `assscratch`,
    `bitchiing`,
    `revolution`,
    `seigheil`
  ],
  get tags() {
    return new Set([
      this.tagsList[getRandIntBetween(0, this.tagsList.length - 1)],
      this.tagsList[getRandIntBetween(0, this.tagsList.length - 1)],
      this.tagsList[getRandIntBetween(0, this.tagsList.length - 1)]
    ]);
  },
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ],
  get color() {
    return this.colors[getRandIntBetween(0, this.colors.length - 1)];
  },
  get isFavorite() {
    return getRandBool();
  },
  get isArchive() {
    return getRandBool();
  },
};
const cards = (sample, count) => {
  const arr = [];
  while (count > 0) {
    const obj = Object.assign({}, sample);
    arr.push(obj);
    count--;
  }

  return arr;
};

const TOTAL_CARDS = 14;
export const tasks = cards(card, TOTAL_CARDS);

const countFilters = (title, arr) => {
  let count = 0;
  if (title === `all`) {
    count = arr.length;
  }

  if (title === `overdue`) {
    for (let key of arr) {
      if (key.dueDate < new Date()) {
        count++;
      }
    }
  }

  if (title === `today`) {
    for (let key of arr) {
      if (key.dueDate.getMonth() === new Date().getMonth() && key.dueDate.getDate() === new Date().getDate()) {
        count++;
      }
    }
  }

  if (title === `favorites`) {
    for (let key of arr) {
      if (key.isFavorite) {
        count++;
      }
    }
  }

  if (title === `repeating`) {
    for (let key of arr) {
      if (key.isRepeating) {
        count++;
      }
    }
  }
  if (title === `tags`) {
    for (let key of arr) {
      if (key.tags) {
        count++;
      }
    }
  }

  if (title === `archive`) {
    for (let key of arr) {
      if (key.isArchive) {
        count++;
      }
    }
  }

  return count;

};
export const filters = [
  {
    title: `all`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `overdue`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `today`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `favorites`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `repeating`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `tags`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `archive`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  }
];
