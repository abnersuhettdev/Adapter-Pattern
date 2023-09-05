import { EmailValidatorAdapter } from "./validation/email-validator-adapter";
import { EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validaEmail(emailValidator: EmailValidatorProtocol, email: string) {
	if (emailValidator.isEmail(email)) {
		console.log("Email é Válido");
	} else {
		console.log("Email é Inválido");
	}
}

validaEmail(new EmailValidatorAdapter(), "teste@testecom");
