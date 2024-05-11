import { faker } from "@faker-js/faker";
import { User } from "../models/user.js";

export const createUser = async (numberOfUsers) => {
  try {
    const userPromises = [];

    for (let i = 0; i < numberOfUsers; i++) {
      const tempUser = User.create({
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        bio: faker.lorem.sentence(10),
        password: "password",
        avatar: {
          url: faker.image.avatar(),
          public_id: faker.system.fileName(),
        },
      });
      userPromises.push(tempUser);
    }
    await Promise.all(userPromises);
    console.log("Users Created", numberOfUsers);
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


