const links =
  process.env.LINKS_TYPE === "prod"
    ? {
        music: "https://music.yandex.ru/album/7375892/track/52396212",
        map: "https://yandex.ru/maps/org/yandeks/1124715036/?ll=37.570552%2C55.738210&mode=search&sctx=ZAAAAAgBEAAaKAoSCeUn1T4dz0JAEYNqgxPR4UtAEhIJU%2BdR8X9H%2Bj8RjbeVXpsN4z8iBgABAgMEBSgKOABAAUgBYiZyZWxldl9pcnJlbF9maWx0ZXI9aXJyZWxfZm1sODYxODE3X2V4cGIrcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9FbmFibGVCZWF1dHlGaWx0ZXI9MWI2cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL05ld1JlbGV2QmVydFRocj0wLjAwagJydZ0BzcxMPaABAKgBAL0BqtRcd8IBkAGclKeYBLPFr7HYA4jV%2BZkEw%2FbJhS3Hi7ia7wKdnNru0QKqz8e7sQLDpObjlwO65oOD0wTPiObJqwWnsdS9oAHH5%2B7K7wP4lKvl3QSinfCJwwGgkOqk%2FgS80af07ATMstfRPZbN2%2FGmBvvk6KWDBu2H3JsrjMvo87sC%2F4Pjma4B%2F5nv3bcG4Jruk6cDrPXfoHHqAQDyAQD4AQCCAgzRj9C90LTQtdC60YGKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.570552%2C55.738210&sspn=0.124641%2C0.045214&text=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81&z=13",
        tr: "https://translate.yandex.ru/?lang=en-ru&text=hello%20world",
        video1:
          "https://yandex.ru/video/preview/?filmId=198484335193438218&reqid=1658097906196960-7557307180056272063-sas3-0732-e22-sas-l7-balancer-8080-BAL-7048&suggest_reqid=202606689162876927279060549798666&text=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D1%88%D1%80%D0%B8",
        video2:
          "https://yandex.ru/video/preview/?filmId=2479178741132479613&reqid=1658097906196960-7557307180056272063-sas3-0732-e22-sas-l7-balancer-8080-BAL-7048&suggest_reqid=202606689162876927279060549798666&text=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D1%88%D1%80%D0%B8&url=http%3A%2F%2Ffrontend.vh.yandex.ru%2Fplayer%2Fvi1tqpQxcVAw",
      }
    : {
        music: "https://music.yandex.ru",
        map: "https://yandex.ru/maps/",
        tr: "https://translate.yandex.ru",
      };

console.log(process.argv);

const alias = process.argv[2];

console.log(links[alias]);
