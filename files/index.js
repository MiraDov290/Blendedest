console.log("Hello from files");
const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join());
// console.log(path.resolve());

// path.join(__dirname)

const usersPath = path.join(__dirname, "..", "db", "users.json");
// console.log(usersPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }
  read = async () => {
    const data = await fs.readFile(this.path, "utf-8");
    // console.log(typeof data); string
    return data;
  };
  list = async () => {
    const data = await this.read();
    console.log(data);
  };
  create = async (users) => {
    const data = await fs.writeFile(this.path, JSON.stringify(users, null, 2));
    if (data) {
      return true;
    }
  };
  add = async (user) => {
    const users = JSON.parse(await this.read());
    // console.log(typeof users);
    // console.log(Array.isArray(users));
    users.push(user);
    return await this.create(users);
  };
  remove = async () => {
    return await fs.unlink(this.path);
  };
  updateOne = async (id, newName) => {
    const users = JSON.parse(await this.read());
    const idx = users.findIndex((user) => user.id === id);
    if (idx === -1) {
      console.log("User not found");
      return null;
    }

    users[idx].name = newName;

    return await this.create(users);
  };

  removeOne = async (id) => {
    const users = JSON.parse(await this.read());
    const idx = users.findIndex((user) => user.id === id);
    if (idx === -1) {
      console.log("User not found");
      return null;
    }

    users.splice(idx, 1);

    return await this.create(users);
  };
}

const file = new FileOperations(usersPath);

//CRUD

// file.list(); //виводить у консоль users.json
const data = [
  { id: "1", name: "Kate" },
  { id: "2", name: "Dolphin" },
  { id: "3", name: "Eldar" },
];
// file.create(data); //створює з нуля users.json
// file.add({ id: "4", name: "Andriy" }); // додає користувача в кінець масиву
// file.remove(); //повність видаляє users.json
// file.updateOne("1", "Kate++"); // шукає користувача по id та змінює им*я
// file.removeOne("2"); //видаляє користувача з цим id з масиву
async function tryCatchHandler(clb, ...data) {
  try {
    if (data) {
      await clb(...data);
    } else {
      await clb();
    }
  } catch (error) {
    console.log("Kate", error);
  }
}

// tryCatchHandler(file.list);
// tryCatchHandler(() => file.create(data));
// tryCatchHandler(file.create, data);
// tryCatchHandler(file.updateOne, "1", "Kate **");
