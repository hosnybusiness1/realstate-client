import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../ui/Button";
import EyeContainer from "../../ui/EyeContainer";
import Form from "../../ui/Form";
import FormContainer from "../../ui/FormContainer";
import FormHRow from "../../ui/FormHRow";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import RowConteiner from "../../ui/RowConteiner";
import StyledNavLink from "../../ui/StyledNavLink";
import BASE_URL from "../../utils/baseUrl";

function LoginForm() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in email and password to login!");
      return false;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      // console.log(response);

      const result = response.data.data;
      console.log(result);
      if (result.email) {
        setAuth({ ...result });
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <FormContainer type="login">
      <Logo />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            margin: ".2rem 0 2rem",
            paddingBottom: ".3rem",
            borderBottom: "1px solid var(--color-grey-300",
          }}
        >
          <span>Don't have an account? </span>
          <StyledNavLink to="/signup">Sign Up</StyledNavLink>
        </div>
        <FormHRow label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={handleEmail}
            placeholder="Email  address"
          />
        </FormHRow>
        <RowConteiner>
          <FormHRow label="Password" error={""}>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password "
            />
          </FormHRow>
          <EyeContainer onClick={handleShowPassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </EyeContainer>
        </RowConteiner>
        <FormHRow>
          <Button size="large" variation="primary">
            Login
          </Button>
        </FormHRow>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;
