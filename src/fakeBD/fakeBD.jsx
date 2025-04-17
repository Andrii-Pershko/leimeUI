export let fakeDB = [
  {
    id: 1,
    discribe: "Вчимо правила легко",
    link: "https://osvitoria.media/wp-content/uploads/2023/07/17.jpg",
    likes: 23,
  },
  {
    id: 2,
    discribe: "Бо актуально",
    link: "https://rivnepost.rv.ua/img/650/internetmemi-yak-zhanr-zhurnalistiki_20250122_8459.jpg",
    likes: 10,
  },
  {
    id: 3,
    discribe: "Коли пів року не був в відпустці",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqFq3ehhaXpcfmEj7VmyR4dwClTSP1qkNig&s",
    likes: 10,
  },
  {
    id: 4,
    discribe: "Типові князі",
    link: "https://naurok.com.ua/uploads/blog/3c.jpg",
    likes: 45,
  },
  {
    id: 5,
    discribe: "Кожен котек у ночі",
    link: "https://lux.fm/uploads/media_news/2024/12/67502cf726f93480284594.jpg?w=400&fit=cover&output=webp&q=85",
    likes: 66,
  },
  {
    id: 6,
    discribe: "Актуальність наших буднів",
    link: "https://osvitoria.media/wp-content/uploads/2023/07/7.jpeg",
    likes: 89,
  },
  {
    id: 7,
    discribe: "Наше майбутнє",
    link: "https://zaborona.com/wp-content/uploads/2022/12/mem-photo_2022-11-19_12-15-49.jpg",
    likes: 11,
  },
  {
    id: 8,
    discribe: "Розмовляй правильно",
    link: "https://naurok.com.ua/uploads/blog/memm.png",
    likes: 24,
  },
  {
    id: 9,
    discribe: "Наші уроки)",
    link: "https://osvitoria.media/wp-content/uploads/2023/07/Screen-Shot-2023-07-30-at-12.13.38-AM-1.png",
    likes: 99,
  },
  {
    id: 10,
    discribe: "Коли немає вихідних на пасху",
    link: "https://kp.ua/img/article/7036/79_tn2-v1736510709.webp",
    likes: 76,
  },
];

export const updateFakeBD = (list) => {
  fakeDB = list;
};
