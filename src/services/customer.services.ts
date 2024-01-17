import { StatusCode } from "@/constants/app.constants";
import { CustomerRepository } from "@/database";
import { ISignInInput } from "@/types";
import { formateData, generateSignature, validatePassword } from "@/utils";
import { ApiError } from "@/utils/appError";

class CustomerService {
  repository: CustomerRepository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  async signIn({ email, password }: ISignInInput) {
    try {
      let existingCustomer = await this.repository.findCustomer(email);
      if (existingCustomer) {
        const validPassword = await validatePassword(
          existingCustomer.password,
          password,
        );

        if (validPassword) {
          const { email, phone, _id } = existingCustomer;
          const payload = {
            email,
            phone,
            _id,
          };
          const token = generateSignature(payload);
          return formateData({ id: existingCustomer._id, token });
        }
        return formateData(null);
      }
    } catch (error) {
      throw new ApiError(
        "failed to signIn",
        StatusCode.BAD_REQUEST,
        JSON.stringify(error),
      );
    }
  }
}

export default CustomerService;
