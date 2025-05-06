// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from '../../CustomLoader';
// import ReactStars from "react-stars";

// export const AddReview = () => {
//     const { register, handleSubmit, formState: { errors },setError,clearErrors } = useForm();
//     const navigate = useNavigate();
//     const [isLoading, setisLoading] = useState(false);
//     const [rating, setRating] = useState(0); // ⭐ State for rating
//     const [lawyers, setLawyers] = useState([]); // ⭐ State for lawyers




//     useEffect(() => {
//         const fetchLawyers = async () => {
//             try {
//                 const res = await axios.get("/lawyers"); // Adjust API endpoint
//                 setLawyers(res.data.data);
//             } catch (error) {
//                 console.error("Error fetching lawyers:", error);
//             }
//         };
//         fetchLawyers();
//     }, []);

//     const submitHandler = async (data) => {
//         const userId = localStorage.getItem("id");
//         data.userId = userId;
//         data.rating = rating;
//         console.log(data);
//         setisLoading(true);


//         // ✅ Validate rating
//         if (rating === 0) {
//             setError("rating", { type: "manual", message: "Rating is required *" });
//             return;
//         } else {
//             clearErrors("rating");
//         }

//         try {
//             const res = await axios.post("/addReview",data)
//             setisLoading(false);
//             console.log(res.status);

//             if (res.status === 201) {
//                 toast.success('Review Add successfully!', { transition: Bounce, theme: "dark" });
//                 setTimeout(() => navigate("/user/viewMyReviews"), 2500);
//             }
//         } catch (error) {
//             setisLoading(false);
//             toast.error('Failed to Add Review. Please try again.', { transition: Bounce, theme: "dark" });
//         }
//     };

//     const ValidationSchema = {

//         lawyerValidator: {
//             required: { value: true, message: "Lawyer selection is required *" },
//         },
//         ratingValidator: {
//             required: { value: true, message: "Rating  required *" },
//         },
//         commentValidator: {
//             required: { value: true, message: "comment is required *" },
//         },
//     };

//     return (
//         <div>
//             <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
//             {isLoading && <CustomLoader />}
//             <Form onSubmit={handleSubmit(submitHandler)}>
//                 <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)", backgroundSize: "cover" }}>
//                     <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
//                         <Card.Body className="px-4">
//                             <h2 className="text-uppercase text-center mb-4">Add Query</h2>


//                             <Form.Group className="mb-3">
//                                 <Form.Label>Select Lawyer</Form.Label>
//                                 <Form.Select {...register("lawyerId", ValidationSchema.lawyerValidator)}>
//                                     <option value="">-- Select a Lawyer --</option>
//                                     {lawyers.map((lawyer) => (
//                                         <option key={lawyer._id} value={lawyer._id}>
//                                             {lawyer.name}
//                                         </option>
//                                     ))}
//                                 </Form.Select>
//                                 <Form.Text className="text-danger">{errors.lawyerId?.message}</Form.Text>
//                             </Form.Group>

                            

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Rating</Form.Label>
//                                 <ReactStars
//                                     count={5}
//                                     value={rating}
//                                     onChange={(newRating) => {
//                                         setRating(newRating);
//                                         if (newRating > 0) clearErrors("rating");
//                                     }}
//                                     size={30}
//                                     activeColor="#ffd700"
//                                 />
//                                 <Form.Text className="text-danger">{errors.rating?.message}</Form.Text>
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Comment</Form.Label>
//                                 <Form.Control type="text" {...register("comment", ValidationSchema.commentValidator)} />
//                                 <Form.Text className="text-danger">{errors.comment?.message}</Form.Text>
//                             </Form.Group>

//                             <Button type="submit" className="mt-3 w-100" variant="primary" size="lg">
//                                 Send Message
//                             </Button>
//                         </Card.Body>
//                     </Card>
//                 </Container>
//             </Form>
//         </div>
//     );
// };

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from '../../CustomLoader';
import ReactStars from "react-stars";

export const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [rating, setRating] = useState(0);
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const res = await axios.get("/lawyers");
                setLawyers(res.data.data);
            } catch (error) {
                console.error("Error fetching lawyers:", error);
            }
        };
        fetchLawyers();
    }, []);

    const submitHandler = async (data) => {
        const userId = localStorage.getItem("id");
        data.userId = userId;
        data.rating = rating;
        setisLoading(true);

        if (rating === 0) {
            setError("rating", { type: "manual", message: "Rating is required *" });
            setisLoading(false);
            return;
        } else {
            clearErrors("rating");
        }

        try {
            const res = await axios.post("/addReview", data);
            setisLoading(false);
            if (res.status === 201) {
                toast.success('Review added successfully!', { transition: Bounce, theme: "dark" });
                setTimeout(() => navigate("/user/viewMyReviews"), 2500);
            }
        } catch (error) {
            setisLoading(false);
            toast.error('Failed to add review. Please try again.', { transition: Bounce, theme: "dark" });
        }
    };

    const ValidationSchema = {
        lawyerValidator: { required: { value: true, message: "Lawyer selection is required *" } },
        ratingValidator: { required: { value: true, message: "Rating required *" } },
        commentValidator: { required: { value: true, message: "Comment is required *" } },
    };

    return (
        <div>
            <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
            {isLoading && <CustomLoader />}
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Container
                    fluid
                    className="d-flex align-items-center justify-content-center min-vh-100"
                    style={{
                        backgroundImage: "url('https://assets.onecompiler.app/43dpwcgs5/43fy7485m/DeWatermark.ai_1745674428758.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Card
                        className="m-3 p-4 shadow-lg"
                        style={{
                            maxWidth: "500px",
                            width: "100%",
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                            color: "#ffffff"
                        }}
                    >
                        <Card.Body className="px-4">
                            <h2 className="text-uppercase text-center mb-4" style={{ color: "#ffffff" }}>
                                Add Review
                            </h2>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontWeight: "600", color: "#ffffff" }}>Select Lawyer</Form.Label>
                                <Form.Select {...register("lawyerId", ValidationSchema.lawyerValidator)}>
                                    <option value="">-- Select a Lawyer --</option>
                                    {lawyers.map((lawyer) => (
                                        <option key={lawyer._id} value={lawyer._id}>
                                            {lawyer.name}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Text className="text-danger">{errors.lawyerId?.message}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontWeight: "600", color: "#ffffff" }}>Rating</Form.Label>
                                <ReactStars
                                    count={5}
                                    value={rating}
                                    onChange={(newRating) => {
                                        setRating(newRating);
                                        if (newRating > 0) clearErrors("rating");
                                    }}
                                    size={30}
                                    activeColor="#ffd700"
                                />
                                <Form.Text className="text-danger">{errors.rating?.message}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontWeight: "600", color: "#ffffff" }}>Comment</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write your feedback..."
                                    {...register("comment", ValidationSchema.commentValidator)}
                                />
                                <Form.Text className="text-danger">{errors.comment?.message}</Form.Text>
                            </Form.Group>

                            <Button type="submit" className="mt-3 w-100" variant="primary" size="lg">
                                Submit Review
                            </Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Form>
        </div>
    );
};
