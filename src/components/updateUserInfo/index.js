import { enhancer } from "./UpdateUserInfo.enhancer";
import { UpdateUserInfo } from "./UpdateUserInfo";

export const UpdateUserInfoContainer = enhancer(UpdateUserInfo);

// enhancer basiclly ties up details between store and component