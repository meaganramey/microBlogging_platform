import { enhancer } from "./GetUserInfo.enhancer";
import { DisplayUserInfo } from "./GetUserInfo";

export const GetUserInfoContainer = enhancer(DisplayUserInfo);

// enhancer basiclly ties up details between store and component