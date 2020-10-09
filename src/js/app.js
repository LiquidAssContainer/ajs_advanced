export function orderByProps(object, table) {
  let arrayByTable = [],
    arrayByName = [];

  for (let prop in object) { // предполагается отсутствие перечисляемых свойств у прототипа, поэтому отдельной проверки нет
    let keyValue = { key: prop, value: object[prop] };
    if (table.includes(prop)) {
      let index = table.indexOf(prop);
      arrayByTable[index] = keyValue;
    } else {
      arrayByName.push(keyValue);
    }
  }

  if (table.length !== arrayByTable.length) {
    throw new Error('В таблице есть неверные свойства');
  }

  arrayByName.sort((a, b) => (a.key > b.key ? 1 : -1)); // 0, думаю, необязателен, т. к. одинаковых свойств быть не может

  let concatedArray = arrayByTable.concat(arrayByName);
  return concatedArray;
}

export function getSpecialAttack(obj) {
  let { special } = obj,
    resultArr = [];

  for (let item of special) {
    let { id, name, icon, description = 'Описание недоступно' } = item;
    resultArr.push({ id, name, icon, description });
  }

  return resultArr;
}
