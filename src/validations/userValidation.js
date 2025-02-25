import * as yup from "yup";

const UserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
});

export default UserSchema;
