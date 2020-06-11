import { enhancer } from "./ProfileImage.enhancer";
import { ProfileImage } from "./ProfileImage";

export const ProfileImageContainer = enhancer(ProfileImage);

// enhancer basiclly ties up details between store and component