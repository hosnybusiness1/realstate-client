import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormHRow from "../../ui/FormHRow";
import Input from "../../ui/Input";

export default function AddProduct() {
  // const {onS} = useForm()
  console.log(useForm());
  const [formData, setFormData] = useState({
    name: "",
    description:"",
    price:0,
    countInStock:0,
    images:"Not now",
    "brand":"Mercedes"
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormDtat((prev) => ({ ...formData, [id]: value }));
  };
  return (
    <Form>
      <FormHRow>
        <Input type="text" name="name" id="name" />
      </FormHRow>
    </Form>
  );
}
