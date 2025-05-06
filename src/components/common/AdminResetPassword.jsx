
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const AdminResetPassword = () => {
  const token = useParams().token;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const obj = {
        token: token,
        password: data.password,
      };
      const res = await axios.post("/admin/resetPassword", obj);
      console.log(res.data);

      if (res.status === 200) {
        toast.success("Password reset successfully", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });

        setTimeout(() => {
          navigate("/adminLogin");
        }, 2500);
      }
    } catch (error) {
      toast.error("Failed to reset password", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const ValidationSchema = {
    newPasswordValidator: {
      required: "Password is required *",
      minLength: {
        value: 8,
        message: "Minimum length is 8 characters",
      },
    },
    rpasswordValidator: {
      required: "Repeat Password is required *",
      minLength: {
        value: 8,
        message: "Minimum length is 8 characters",
      },
      validate: (value) =>
        value === watch("password") || "Passwords do not match",
    },
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage:
          "url(https://assets.onecompiler.app/43dpwcgs5/43fxxmzrn/Lovepik_com-500541552-password-lock.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <ToastContainer />

      <Card
        className="p-4 shadow-lg"
        style={{
          maxWidth: "450px",
          width: "100%",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Card.Body>
          <h2
            className="text-center mb-4"
            style={{ fontWeight: "bold", color: "#0d6efd" }}
          >
            Reset Your Password
          </h2>

          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>
                New Password
              </Form.Label>
              <Form.Control
                type="password"
                {...register("password", ValidationSchema.newPasswordValidator)}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                {...register("rpassword", ValidationSchema.rpasswordValidator)}
              />
              {errors.rpassword && (
                <span className="text-danger">{errors.rpassword.message}</span>
              )}
            </Form.Group>

            <Button
              variant="primary"
              className="w-100 mb-3"
              type="submit"
              size="lg"
              style={{
                background:
                  "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                border: "none",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              Reset Password
            </Button>

            <div className="text-center">
              <Link
                to="/lawyerLogin"
                className="text-decoration-none text-primary fw-semibold"
              >
                Back to Login
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

