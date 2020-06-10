import { enhancer } from "./ListOfUsers.enhancer";
import { DisplayListOfUsers } from "./ListOfUsers";

export const ListOfUsersContainer = enhancer(DisplayListOfUsers);

// enhancer basiclly ties up details between store and component