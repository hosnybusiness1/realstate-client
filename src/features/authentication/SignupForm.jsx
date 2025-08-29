import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormContainer from "../../ui/FormContainer";
import FormHRow from "../../ui/FormHRow";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import Select from "../../ui/Select";
import StyledNavLink from "../../ui/StyledNavLink";
import BASE_URL from "../../utils/baseUrl.js";
// Email regex: /\S+@\S+\.\S+/
import EyeContainer from "../../ui/EyeContainer.jsx";
import RowConteiner from "../../ui/RowConteiner.jsx";

const FormHRowsConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const StyledTag = styled.h4`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const StyledAstrisk = styled.span`
  position: absolute;
  font-size: 2.2rem;
  color: red;
  position: absolute;
  top: 0.6rem;
  right: 1rem;
`;

function SignupForm() {
  const navigate = useNavigate();

  const inputErrors = {};
  let errMsg = ``;

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    mobile: "",
    phone: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
    useAs: "",
  });

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowPasswordConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);

  function handleChange(e) {
    const { id, value } = e.target;
    if (id.includes("address.")) {
      const field = id.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [id]: value });
    }
  }

  function handleInputValidate() {
    if (!formData.name || formData.name === "")
      inputErrors["name"] = "Full Name is required.";

    if (!formData.email || formData.email === "")
      inputErrors["email"] = "Email is required.";
    if (!formData.password || formData.password === "")
      inputErrors["password"] =
        "Password is required and must be more than or equal 8 characters.";

    if (!formData.passwordConfirm || formData.passwordConfirm === "")
      inputErrors["passwordConfirm"] = "Password Confirm is required.";

    if (!formData.street || formData.street === "")
      inputErrors["street"] = "Street is required";
    if (!formData.city || formData.city === "")
      inputErrors["city"] = "City is required";
    if (!formData.postalCode || formData.postalCode === "")
      inputErrors["postalCode"] = "Postal Code is required";
    if (!formData.country || formData.country === "")
      inputErrors["country"] = "Country is required";
  }

  function validPasswordConfirm() {
    if (formData.password !== formData.passwordConfirm)
      inputErrors["passwordConfirm"] =
        "Password confirm must be the same with password.";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleInputValidate();
    validPasswordConfirm();
    if (Object.keys(inputErrors).length > 0) {
      for (let key in inputErrors) {
        errMsg += inputErrors[key] + " | ";
      }
      toast.error(errMsg);
      errMsg = ``;
      return false;
    }
    console.log(formData);
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, formData);
      console.log(response);

      const result = await response?.data?.data;
      console.log(result);
      if (result) {
        toast.success("Registartion success, visit your email to activate.");
        navigate("/");
      }
    } catch (err) {
      if (
        err.message === "User with Email mazen@barakat.com is already exists!"
      ) {
        navigate("/login");
      }
      console.log(err);
      toast.error(err.response.data);
    }
  }

  return (
    <FormContainer type="signup">
      <Logo>e-shop</Logo>
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            margin: ".2rem 0 2rem",
            paddingBottom: ".3rem",
            borderBottom: "1px solid var(--color-grey-300",
          }}
        >
          <span>Allready have an account? </span>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </div>

        <FormHRow error={""}>
          <Select id="useAs" onChange={handleChange}>
            <option value="">Use site as</option>
            <option value="user">User</option>
            <option value="vendor">Vendore</option>
          </Select>
        </FormHRow>
        <FormHRow label="Full name" error={""}>
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Full Name"
            onChange={(e) => handleChange(e)}
          />
        </FormHRow>

        <FormHRow label="Email" error={""}>
          <Input
            type="email"
            id="email"
            required
            onChange={handleChange}
            placeholder="Email"
          />
        </FormHRow>

        <RowConteiner>
          <FormHRow label="Password (min 8 characters)" error={""}>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              onChange={handleChange}
              placeholder="Password (min 8 characters)"
            />
          </FormHRow>
          <EyeContainer onClick={handleShowPassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </EyeContainer>
        </RowConteiner>

        <RowConteiner>
          <FormHRow
            label="Repeat password"
            error={
              inputErrors["passwordConfirm"] && inputErrors["passwordConfirm"]
            }
          >
            <Input
              type={showPasswordConfirm ? "text" : "password"}
              id="passwordConfirm"
              required
              onChange={handleChange}
              placeholder="Repeat Password"
            />
          </FormHRow>

          <EyeContainer onClick={handleShowPasswordConfirm}>
            {showPasswordConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
          </EyeContainer>
        </RowConteiner>

        <FormHRow label="Phone" error={""}>
          <Input
            type="text"
            id="phone"
            required
            onChange={handleChange}
            placeholder="Phone"
          />
        </FormHRow>
        <FormHRow label="Mobile" error={""}>
          <Input
            type="text"
            id="mobile"
            required
            onChange={handleChange}
            placeholder="Moblie"
          />
        </FormHRow>
        <StyledTag>Address</StyledTag>
        <FormHRow label="Street" error={""}>
          <Input
            type="text"
            id="street"
            required
            onChange={handleChange}
            placeholder="Street"
          />
        </FormHRow>
        <FormHRow label="City" error={""}>
          <Input
            type="text"
            id="city"
            onChange={handleChange}
            placeholder="City"
          />
        </FormHRow>
        <FormHRowsConteiner>
          <FormHRow label="Postal Code" error={""}>
            <Input
              type="number"
              id="postalCode"
              required
              onChange={handleChange}
              placeholder="Postal Code"
            />
          </FormHRow>
          <FormHRow label="Country" error={""}>
            <Input
              type="text"
              id="country"
              required
              onChange={handleChange}
              placeholder="Country"
            />
          </FormHRow>
        </FormHRowsConteiner>

        <div>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" size="medium" type="reset">
            Cancel
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            variation="primary"
            size="medium"
          >
            Create new user
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default SignupForm;
