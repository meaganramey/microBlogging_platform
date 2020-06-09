import { enhancer } from "./SignUpForm.enhancer";
import { SignUpForm } from "./SignUpForm";

export const SignUpFormContainer = enhancer(SignUpForm);

// enhancer basiclly ties up details between store and component