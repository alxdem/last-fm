const utils = {
  formattUrl: (value) => value.replace(/ /g, '+'),
  imageSet: (array) => {
    let lg;
    let extraLg;

    Array.from(array).forEach((item) => {
      if (item.size === 'large') {
        lg = item['#text'];
      }

      if (item.size === 'extralarge') {
        extraLg = item['#text'];
      }
    });
    return extraLg || lg;
  },
};

export default utils;
