import { useForm } from "react-hook-form";
import Field from "../../common/Field";

const inputStyles = {
	width: "100%",
	padding: "15px 20px",
	backgroundColor: "#ffffff",
	border: "1px solid rgba(103, 22, 46, 0.1)",
	borderRadius: "12px",
	marginBottom: "20px",
	fontFamily: "JustSans, sans-serif",
	fontSize: "16px",
	color: "#67162e",
	transition: "all 0.3s ease",
	outline: "none",
};

const errorStyles = {
	color: "#ff4444",
	fontSize: "14px",
	marginTop: "-15px",
	marginBottom: "15px",
	fontFamily: "JustSans, sans-serif",
};

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	
	const submitForm = (formData) => {
		console.log("Submit Form Data = ", formData);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)} style={{
			width: "100%"
		}}>
			<div>
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
						style={{
							...inputStyles,
							borderColor: errors.name ? "#ff4444" : "rgba(103, 22, 46, 0.1)"
						}}
					/>
				</Field>
				{errors.name && <p style={errorStyles}>{errors.name.message}</p>}
			</div>

			<div>
				<Field error={errors.email}>
					<input
						{...register("email", { 
							required: "Email is required.",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address"
							}
						})}
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
						style={{
							...inputStyles,
							borderColor: errors.email ? "#ff4444" : "rgba(103, 22, 46, 0.1)"
						}}
					/>
				</Field>
				{errors.email && <p style={errorStyles}>{errors.email.message}</p>}
			</div>

			<div>
				<input 
					type="text" 
					placeholder="Phone Number"
					style={inputStyles}
				/>
			</div>

			<div>
				<textarea 
					name="message" 
					placeholder="Write your message here..."
					style={{
						...inputStyles,
						height: "120px",
						resize: "vertical",
						minHeight: "120px"
					}}
				></textarea>
			</div>

			<button 
				type="submit"
				style={{
					backgroundColor: "#67162e",
					color: "#f4e2b4",
					padding: "15px 30px",
					borderRadius: "25px",
					border: "none",
					fontSize: "18px",
					fontFamily: "JustSans, sans-serif",
					fontWeight: "500",
					cursor: "pointer",
					display: "inline-flex",
					alignItems: "center",
					gap: "10px",
					transition: "all 0.3s ease",
					":hover": {
						backgroundColor: "#7a1936"
					}
				}}
			>
				Send message
				<svg 
					width="20" 
					height="20" 
					viewBox="0 0 20 20" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg"
					style={{
						marginLeft: "8px"
					}}
				>
					<path 
						d="M4 10H16M16 10L10 4M16 10L10 16" 
						stroke="#f4e2b4" 
						strokeWidth="2" 
						strokeLinecap="round" 
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</form>
	);
}

export default MessageForm;
