// pages/api/common-codes.ts
import { NextApiRequest, NextApiResponse } from "next";

// In-memory storage for groups and items
let groups: {
  group_id: string;
  group_name: string;
  group_desc: string;
}[] = [
  {
    group_id: "1",
    group_name: "carrier",
    group_desc: "",
  },
  {
    group_id: "2",
    group_name: "Category B",
    group_desc: "Description of Category B",
  },
];

let items: {
  item_id: string;
  parent_group: string;
  item_name: string;
}[] = [
  {
    item_id: "1",
    parent_group: "1",
    item_name: "Монгол Эксперес ХХК",
  },
  {
    item_id: "2",
    parent_group: "1",
    item_name: "Мастер ложистик",
  },
  {
    item_id: "3",
    parent_group: "1",
    item_name: "TILogistic",
  },
  {
    item_id: "4",
    parent_group: "1",
    item_name: "Интермодал терминал ХХК",
  },
  {
    item_id: "5",
    parent_group: "1",
    item_name: "Ти энд Ти",
  },
  {
    item_id: "6",
    parent_group: "1",
    item_name: "АСW",
  },
  {
    item_id: "7",
    parent_group: "1",
    item_name: "Ashley trans",
  },
  {
    item_id: "8",
    parent_group: "1",
    item_name: "Контлайн",
  },
  {
    item_id: "9",
    parent_group: "1",
    item_name: "Батжих-Хишиг",
  },
  {
    item_id: "10",
    parent_group: "1",
    item_name: "МСТ ХХК",
  },
  {
    item_id: "11",
    parent_group: "1",
    item_name: "Sea air land",
  },
  {
    item_id: "12",
    parent_group: "1",
    item_name: "Азийн зам",
  },
  {
    item_id: "13",
    parent_group: "1",
    item_name: "Сантранс Монгол",
  },
  {
    item_id: "14",
    parent_group: "1",
    item_name: "MN LINE ХХК",
  },
  {
    item_id: "15",
    parent_group: "1",
    item_name: "ОУТЗТ",
  },
  {
    item_id: "16",
    parent_group: "1",
    item_name: "Эс Эл Эм ХХК",
  },
  {
    item_id: "17",
    parent_group: "1",
    item_name: "Мон Зам Ложистик ХХК",
  },
  {
    item_id: "18",
    parent_group: "1",
    item_name: "Пролог Солюшн ХХК",
  },
  {
    item_id: "19",
    parent_group: "1",
    item_name: "Илинкс экспересс ХХК",
  },
  {
    item_id: "20",
    parent_group: "1",
    item_name: "Би Эл Си ХХК",
  },
  {
    item_id: "21",
    parent_group: "1",
    item_name: "Ю энд Би ХХК",
  },
  {
    item_id: "22",
    parent_group: "1",
    item_name: "Монложистик",
  },
  {
    item_id: "23",
    parent_group: "1",
    item_name: "Монжапстар ХХК",
  },
  {
    item_id: "24",
    parent_group: "1",
    item_name: "ДонМэ",
  },
  {
    item_id: "25",
    parent_group: "1",
    item_name: "Монгол транспорт",
  },
  {
    item_id: "26",
    parent_group: "1",
    item_name: "Атенса ХХК",
  },
  {
    item_id: "27",
    parent_group: "1",
    item_name: "Ланд экс",
  },
  {
    item_id: "28",
    parent_group: "1",
    item_name: "Би Эф Си ХХК",
  },
  {
    item_id: "29",
    parent_group: "1",
    item_name: "Эс Би Логистик ХХК",
  },
  {
    item_id: "30",
    parent_group: "1",
    item_name: "Сутай Богд ХХК",
  },
  {
    item_id: "31",
    parent_group: "1",
    item_name: "Ариун цомог ХХК",
  },
  {
    item_id: "32",
    parent_group: "1",
    item_name: "Ланд стар ложистик ХХК",
  },
  {
    item_id: "33",
    parent_group: "1",
    item_name: "Пик Пак Ворлдвайд ХХК",
  },
  {
    item_id: "34",
    parent_group: "1",
    item_name: "Аноджин ХХК",
  },
  {
    item_id: "35",
    parent_group: "1",
    item_name: "Эх Газрын Дээж ХХК",
  },
  {
    item_id: "36",
    parent_group: "1",
    item_name: "Азума шиппинг ХХК",
  },
  {
    item_id: "37",
    parent_group: "1",
    item_name: "Бест транс ложистик ХХК",
  },
  {
    item_id: "38",
    parent_group: "1",
    item_name: "Омни шиппинг ХХК",
  },
  {
    item_id: "39",
    parent_group: "1",
    item_name: "Ворлд Бридж Ложистик ХХК",
  },
  {
    item_id: "40",
    parent_group: "1",
    item_name: "TAIMEN",
  },
  {
    item_id: "41",
    parent_group: "1",
    item_name: "ЭмБиТранс",
  },
  {
    item_id: "42",
    parent_group: "1",
    item_name: "Доечэвэллэ мюбль",
  },
  {
    item_id: "43",
    parent_group: "1",
    item_name: "Брайт ложистик",
  },
  {
    item_id: "44",
    parent_group: "1",
    item_name: "Ар Сайн Баянгол ХХК",
  },
  {
    item_id: "45",
    parent_group: "1",
    item_name: "Амар Гранд",
  },
  {
    item_id: "46",
    parent_group: "1",
    item_name: "Хамаг монгол хуралдай",
  },
  {
    item_id: "47",
    parent_group: "1",
    item_name: "Сайнза интернэшнл",
  },
  {
    item_id: "48",
    parent_group: "1",
    item_name: "Mammoth link",
  },
  {
    item_id: "49",
    parent_group: "1",
    item_name: "Мон тээвэр сервис",
  },
  {
    item_id: "50",
    parent_group: "1",
    item_name: "Мидас ложистик ХХК",
  },
  {
    item_id: "51",
    parent_group: "1",
    item_name: "Ти Энд Эй ХХК",
  },
  {
    item_id: "52",
    parent_group: "1",
    item_name: "Эрчим транс ХХК",
  },
  {
    item_id: "53",
    parent_group: "1",
    item_name: "Дуг ложистикс ХХК",
  },
  {
    item_id: "54",
    parent_group: "1",
    item_name: "Итгэлт транс ХХК",
  },
  {
    item_id: "55",
    parent_group: "1",
    item_name: "Алтай ложистик",
  },
  {
    item_id: "56",
    parent_group: "1",
    item_name: "Итгэлт эрин терминал",
  },
  {
    item_id: "57",
    parent_group: "1",
    item_name: "Их Нарлаг Монгол ХХК",
  },
  {
    item_id: "58",
    parent_group: "1",
    item_name: "MRT Cargo",
  },
  {
    item_id: "59",
    parent_group: "1",
    item_name: "Перфектрайл ХХК",
  },
  {
    item_id: "60",
    parent_group: "1",
    item_name: "Сёожүн",
  },
  {
    item_id: "61",
    parent_group: "1",
    item_name: "Онги төгрөг сагсай ХХК",
  },
  {
    item_id: "62",
    parent_group: "1",
    item_name: "Төв азийн зам ХХК",
  },
  {
    item_id: "63",
    parent_group: "1",
    item_name: "Касс таун групп",
  },
  {
    item_id: "64",
    parent_group: "1",
    item_name: "TML-beldets",
  },
  {
    item_id: "65",
    parent_group: "1",
    item_name: "МКЛ ХХК",
  },
  {
    item_id: "66",
    parent_group: "1",
    item_name: "Мөнх Ану",
  },
  {
    item_id: "67",
    parent_group: "1",
    item_name: "Тонж ложистик ХХК",
  },
  {
    item_id: "68",
    parent_group: "1",
    item_name: "Дөлгөөн аравт",
  },
  {
    item_id: "69",
    parent_group: "1",
    item_name: "НАВИ СТАР ТРАНС",
  },
  {
    item_id: "70",
    parent_group: "1",
    item_name: "Скай Профейшн Ложистик",
  },
  {
    item_id: "71",
    parent_group: "1",
    item_name: "Айраг контейнер терминал",
  },
  {
    item_id: "72",
    parent_group: "1",
    item_name: "Тэнгэр экспресс ХХК",
  },
  {
    item_id: "73",
    parent_group: "1",
    item_name: "Юнайтед шиппинг ХХК",
  },
  {
    item_id: "74",
    parent_group: "1",
    item_name: "Энтайрглобал",
  },
  {
    item_id: "75",
    parent_group: "1",
    item_name: "Росмон ложистик",
  },
  {
    item_id: "76",
    parent_group: "1",
    item_name: "Доечэвэллэ",
  },
  {
    item_id: "77",
    parent_group: "1",
    item_name: "Планинг партнерс",
  },
  {
    item_id: "78",
    parent_group: "1",
    item_name: "Ханжин транс ХХК",
  },
  {
    item_id: "79",
    parent_group: "1",
    item_name: "Эса пропертиз ХХК",
  },
  {
    item_id: "80",
    parent_group: "1",
    item_name: "Nice mongolia LLC",
  },
  {
    item_id: "81",
    parent_group: "1",
    item_name: "Юу Ти Си ХХК",
  },
  {
    item_id: "82",
    parent_group: "1",
    item_name: "Даянжин ХХК",
  },
  {
    item_id: "83",
    parent_group: "1",
    item_name: "Ант смарт системс",
  },
  {
    item_id: "84",
    parent_group: "1",
    item_name: "Шандас говь ХХК",
  },
  {
    item_id: "85",
    parent_group: "1",
    item_name: "Болор Жим",
  },
  {
    item_id: "86",
    parent_group: "1",
    item_name: "Юни карго терминал ХХК",
  },
  {
    item_id: "87",
    parent_group: "1",
    item_name: "Даймонд эксим ложистик",
  },
  {
    item_id: "88",
    parent_group: "1",
    item_name: "М Си Эс Кока Кола",
  },
  {
    item_id: "89",
    parent_group: "1",
    item_name: "Фалкон Форвард ХХК",
  },
  {
    item_id: "90",
    parent_group: "1",
    item_name: "Ти Эм Инфинити",
  },
  {
    item_id: "91",
    parent_group: "1",
    item_name: "Гэрээгүй Зууч",
  },
  {
    item_id: "92",
    parent_group: "1",
    item_name: "Эвсүүн Заяа ХХК",
  },
  {
    item_id: "93",
    parent_group: "1",
    item_name: "Мөнх Дэнзэн ХХК",
  },
  {
    item_id: "94",
    parent_group: "1",
    item_name: "Глобалворлд Вайд ХХК",
  },
  {
    item_id: "95",
    parent_group: "1",
    item_name: "Мастер ай эф эф",
  },
  {
    item_id: "96",
    parent_group: "1",
    item_name: "Их гунан",
  },
  {
    item_id: "97",
    parent_group: "1",
    item_name: "Эймид ложистик",
  },
  {
    item_id: "98",
    parent_group: "1",
    item_name: "Кока кола /mcs/",
  },
  {
    item_id: "99",
    parent_group: "1",
    item_name: "Техник Импорт",
  },
];

// Helper functions
const createGroup = (groupData: any) => {
  const newGroup = {
    group_id: (groups.length + 1).toString(),
    ...groupData,
  };
  groups.push(newGroup);
  return newGroup;
};

const updateGroup = (group_id: string, updatedData: any) => {
  const groupIndex = groups.findIndex((g) => g.group_id === group_id);
  if (groupIndex === -1) return null;
  groups[groupIndex] = { ...groups[groupIndex], ...updatedData };
  return groups[groupIndex];
};

const deleteGroup = (group_id: string) => {
  const groupIndex = groups.findIndex((g) => g.group_id === group_id);
  if (groupIndex === -1) return null;
  return groups.splice(groupIndex, 1)[0];
};

const createItem = (itemData: any) => {
  const newItem = {
    item_id: (items.length + 1).toString(),
    ...itemData,
  };
  items.push(newItem);
  return newItem;
};

const updateItem = (item_id: string, updatedData: any) => {
  const itemIndex = items.findIndex((i) => i.item_id === item_id);
  if (itemIndex === -1) return null;
  items[itemIndex] = { ...items[itemIndex], ...updatedData };
  return items[itemIndex];
};

const deleteItem = (item_id: string) => {
  const itemIndex = items.findIndex((i) => i.item_id === item_id);
  if (itemIndex === -1) return null;
  return items.splice(itemIndex, 1)[0];
};

// Main API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { type, id } = req.query; // `type` can be "group" or "item"

  switch (method) {
    case "GET": {
      if (type === "group") {
        res.status(200).json(groups);
      } else if (type === "item") {
        res.status(200).json(items);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    case "POST": {
      const { group_name, group_desc, parent_group, item_name } = req.body;

      if (type === "group") {
        if (!group_name || !group_desc) {
          return res
            .status(400)
            .json({ message: "group_name and group_desc are required" });
        }
        const newGroup = createGroup({ group_name, group_desc });
        res.status(201).json(newGroup);
      } else if (type === "item") {
        if (!parent_group || !item_name) {
          return res
            .status(400)
            .json({ message: "parent_group and item_name are required" });
        }
        const newItem = createItem({ parent_group, item_name });
        res.status(201).json(newItem);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    case "PUT": {
      if (!id) {
        return res.status(400).json({ message: "ID is required for update" });
      }

      if (type === "group") {
        const updatedGroup = updateGroup(id as string, req.body);
        if (!updatedGroup) {
          return res.status(404).json({ message: "Group not found" });
        }
        res.status(200).json(updatedGroup);
      } else if (type === "item") {
        const updatedItem = updateItem(id as string, req.body);
        if (!updatedItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(updatedItem);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    case "DELETE": {
      if (!id) {
        return res.status(400).json({ message: "ID is required for deletion" });
      }

      if (type === "group") {
        const deletedGroup = deleteGroup(id as string);
        if (!deletedGroup) {
          return res.status(404).json({ message: "Group not found" });
        }
        res.status(200).json(deletedGroup);
      } else if (type === "item") {
        const deletedItem = deleteItem(id as string);
        if (!deletedItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(deletedItem);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    default: {
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
