import Styled from "../EditProfile.Styled";
import TextField from "../../../../components/TextField";
import { MdClose } from "react-icons/md";
import SelectInput from "../../../../components/SelectInput";
import Button from "../../../../components/Button";
import useForm from "../../../../hooks/useForm";
import { object, string, date } from "yup";
import { subYears } from "date-fns";
const minAgeYear = 18;

const editBasicSchema = object().shape({
  first_name: string()
    .required("First Name is Required")
    .min(3, "First Name should be atleast 3 characters"),
  last_name: string().required("Last Name is required"),
  email: string()
    .email("Please enter a valid Email address.")
    .required("Email is required.")
    .matches(/@saintgits.org$/, "Please provide your Saintgits Email ID."),
  gender: string()
    .required("Gender is required.")
    .oneOf(["male", "female", "other"]),
  address: string().required("Address is required."),
  phone: string()
    .length(10, "Enter a valid Phone Number.")
    .required("Phone number is required.")
    .matches(/^[6-9]\d{9}$/, "Enter a valid Phone Number"),
  dob: date()
    .typeError("Date of Birth should be a valid date")
    .max(
      subYears(new Date(), minAgeYear),
      `Should be atleast ${minAgeYear} years old`
    )
    .required("Date of Birth is required"),
});

const EditBasic = ({
  closeCallback = () => {},
  autoFillData,
  formSchema,
  formCallback,
}) => {
  const { register, onSubmit, errors } = useForm(autoFillData, editBasicSchema);

  return (
    <Styled>
      <div className="head-section">
        <h1>Edit Basic</h1>
        <button className="close-btn" onClick={() => closeCallback("basic")}>
          <MdClose className="icon" />
        </button>
      </div>
      <div className="content">
        <form onSubmit={(e) => onSubmit(e, formCallback)}>
          <TextField
            label="First Name"
            errorMsg={errors["first_name"]}
            {...register("first_name")}
          />
          <TextField
            label="Last Name"
            errorMsg={errors["last_name"]}
            {...register("last_name")}
          />
          <TextField
            label="Email"
            id={"email-readonly"}
            errorMsg={errors["email"]}
            {...register("email")}
            readOnly={true}
          />
          <TextField
            label="Phone"
            errorMsg={errors["phone"]}
            {...register("phone")}
          />
          <TextField
            label="Address"
            errorMsg={errors["address"]}
            {...register("address")}
          />
          <SelectInput
            label={"Gender"}
            options={[
              { value: "male", name: "Male" },
              { value: "female", name: "Female" },
              { value: "other", name: "Other" },
            ]}
            {...register("gender")}
          />
          <TextField
            label="DOB"
            type="date"
            errMsg={errors["dob"]}
            {...register("dob")}
          />
          <div className="save-btn-box">
            <Button type="submit" text="Save" />
          </div>
        </form>
      </div>
    </Styled>
  );
};

export default EditBasic;
