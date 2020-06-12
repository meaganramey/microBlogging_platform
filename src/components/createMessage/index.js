import { enhancer } from "./CreateMessage.enhancer";
import { NewMessageForm } from "./NewMessageForm";

export const NewMessageFormContainer = enhancer(NewMessageForm);

// enhancer basiclly ties up details between store and component