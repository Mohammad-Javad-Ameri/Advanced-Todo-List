import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Register/Register.module.css";

const Signup = () => {
	const [data, setData] = useState({
		name: '',
		githubUsername:'',
		email: '',
		password: '',
		linkedinUsername:'',
		skills:''
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
    const handleAddItem = () => {
    setList([...list, inputText]);
    setInputText("");
  };
  const input=(e) => {
	setInputText(e.target.value)
	setData({ ...data, [input.name]: input.value });
}

	const handleChange = ({ currentTarget: input }) => {
		
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
			const url = "http://localhost:5000/users";
			const { data: res } = await axios.post(url, data);
			console.log(data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<input
	type="text"
	placeholder="Github"
	name="githubUsername"
	onChange={handleChange}
	value={data.github}
	required
	className={styles.input}
/>
<input
	type="text"
	placeholder="LinkedIn"
	name="linkedinUsername"
	onChange={handleChange}
	value={data.linkedin}
	required
	className={styles.input}
/>
     <input
              type="text"
              placeholder="Skills"
              name="skills"
              onChange={handleChange}
              value={data.skills}
              required
              className={styles.input}
            />
            <input
			placeholder="Skills"
              name="skills"
              type="text"
              value={inputText}
              onChange={input}
			  className={styles.input}
            />
            <button onClick={handleAddItem}>Add</button>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;