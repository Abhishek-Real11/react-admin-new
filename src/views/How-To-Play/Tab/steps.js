import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useFormik } from "formik";
import { how_to_play_page_steps } from "../../../schemas";
import { ToastContainer, toast } from "react-toastify";
import { add_how_to_play_steps_route } from "../../../utils/APIRoutes";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import JoditEditor from "jodit-react";
const config = {
  buttons: [
    "source",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "video",
    "table",
    "link",
    "|",
    "align",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
    "copyformat",
    "|",
    "symbol",
    "fullsize",
    "print",
    "about",
  ],
};

const AddHowToPlaySteps = () => {
  const navigate = useNavigate();
  useEffect(() => {
    myFunction();
  }, []);
  const myFunction = async () => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  };
  const [state, setState] = useState("");
  const [state1, setState1] = useState("");
  const [imageError, setImageError] = useState("");
  const [vrlineImage, setVrLineImage] = useState("");
  const [value, setValue] = useState();
  const editor = useRef(null);
  const getValue = (val) => {
    setValue(val);
  };
  var loadFile = (event) => {
    event.preventDefault();
    if (event.target.files) {
      setState(URL.createObjectURL(event.target.files[0]));
    }
  };

  var loadVrLineImage = (event) => {
    event.preventDefault();
    if (event.target.files) {
      setState1(URL.createObjectURL(event.target.files[0]));
    }
  };
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const initialValues = {
    title: "",
    // description: "",
    image: "",
    subType: "",
    type: "",
    vrline:""
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: how_to_play_page_steps,
    onSubmit: async (values, action) => {
      console.log("2");
      // const { title, description, type, subType } = values;
      // const formData = new FormData();
      // const data = {
      //   title: title,
      //   description: description,
      // };
      const { image, vrline,title,type,subType } = values;
        const formData = new FormData();
        const data = {title: title, description: value };
        formData.append("data", JSON.stringify(data));
        formData.append("image", image);
        formData.append("image", vrline);
        console.log(formData)
      await axios
        .post(
          `${add_how_to_play_steps_route}?type=${type}&subType=${subType}`,
          formData,  { headers: { token: Cookies.get("token") } }
        )
        .then((response) => {
          if (response) {
            navigate("/how-to-play", { state: { active_table: "3" } });
            toast.success(response.data.message, toastOptions);
          }
        })
        .catch(function (error) {
          if (error.response.data.token.isExpired == true) {
            setTimeout(() => {
              Cookies.remove("token", "user");
              navigate("/");
            }, 3000);
            toast.error(error.response.data.token.message, toastOptions);
          }
        });
      action.resetForm();
    },
  });


  return (
    <>
      <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Select
            size="lg"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.type}
            isValid={formik.touched.type && !formik.errors.type}
          >
            <option>Select How-To-Play Type</option>
            <option value="cricket">Cricket</option>
            <option value="football">FootBall</option>
            <option value="kabaddi">Kabaddi</option>
          </Form.Select>
          <br />
          {formik.errors.type && formik.touched.type ? (
            <p
              className="form-error"
              style={{ color: "red", width: "100%", display: "block" }}
            >
              {formik.errors.type}
            </p>
          ) : null}

          <Form.Select
            size="lg"
            name="subType"
            value={formik.values.subType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.subType}
            isValid={formik.touched.subType && !formik.errors.subType}
          >
            <option>Select How-To-Play SubType</option>
            <option value="fullinning">Full Inning</option>
            <option value="secondInnings">Second Innings</option>
            <option value="livefantasy">Live Fantasy</option>
            <option value="spotfantasy">Spot Fantasy</option>
            <option value="n/a">N/A</option>
          </Form.Select>
          <br />
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            size="lg"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.order}
            isValid={formik.touched.order && !formik.errors.order}
          />
          {formik.errors.title && formik.touched.title ? (
            <p
              className="form-error"
              style={{ color: "red", width: "100%", display: "block" }}
            >
              {formik.errors.title}
            </p>
          ) : null}
        </Form.Group>
        <JoditEditor
            ref={editor}
            config={config}
            initialValue=""
            getValue={getValue}
            tabIndex={1}
            onChange={(newContent) => getValue(newContent)}
          />
          <br/>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Select a Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            size="lg"
            accept="image/*"
            onChange={(e) => {
              formik.setFieldValue("image", e.target.files[0]);
              setImageError("");
              loadFile(e);
            }}
            isInvalid={!!formik.errors.image}
            isValid={formik.touched.image && !formik.errors.image}
          />
          {formik.errors.image && formik.touched.image ? (
            <p
              className="form-error"
              style={{ color: "red", width: "100%", display: "block" }}
            >
              {formik.errors.image}
            </p>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Select a vrline Image</Form.Label>
          <Form.Control
            type="file"
            name="vrline"
            size="lg"
            accept="image/*"
            onChange={(e) => {
              formik.setFieldValue("vrline", e.target.files[0]);
              setVrLineImage("");
              loadFile(e);
            }}
            isInvalid={!!formik.errors.image}
            isValid={formik.touched.image && !formik.errors.image}
          />
          {formik.errors.image && formik.touched.image ? (
            <p
              className="form-error"
              style={{ color: "red", width: "100%", display: "block" }}
            >
              {formik.errors.image}
            </p>
          ) : null}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddHowToPlaySteps;
