import { enhancer } from "./Profile.enhancer";
import { Profile } from "./Profile";

export const ProfileContainer = enhancer(Profile);

// enhancer basiclly ties up details between store and component