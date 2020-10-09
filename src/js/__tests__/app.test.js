import { orderByProps, getSpecialAttack } from '../app';

test('orderByProps', () => {
  let obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  let result = orderByProps(obj, ['name', 'level']);

  let expected = [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];

  expect(result).toEqual(expected);
});

test('orderByProps with incorrect table', () => {
  let obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  let resultFn = () => orderByProps(obj, ['name', 'level', 'plov', 'vodka']);

  expect(resultFn).toThrow(Error('В таблице есть неверные свойства'));
});

test('getSpecialAttack', () => {
  let obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  let result = getSpecialAttack(obj);

  let expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  expect(result).toEqual(expected);
});
