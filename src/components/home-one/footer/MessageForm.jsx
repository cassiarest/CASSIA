import { useState } from "react";

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
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "a37f046e-d37a-4c6c-b91d-c0e359012add",
                    to: "cassiasocial1@gmail.com",
                    subject: "New message from Cassia website",
                    from_name: name || "Website Visitor",
                    phone,
                    message
                })
            });
            const data = await res.json();
            if (data && (data.success || data.code === 200)) {
                setStatus("success");
                setName("");
                setPhone("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div>
                <input 
                    type="text" 
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyles}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={inputStyles}
                />
            </div>
            <div>
                <textarea 
                    name="message" 
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                        ...inputStyles,
                        height: "240px",
                        resize: "vertical",
                        minHeight: "240px"
                    }}
                ></textarea>
            </div>
            <button 
                type="submit"
                disabled={status === "sending"}
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
                    opacity: status === "sending" ? 0.7 : 1
                }}
            >
                {status === "sending" ? "Sending..." : "Send message"}
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "8px" }}
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
            {status === "success" && (
                <p style={{ color: "#f4e2b4", marginTop: "12px" }}>Message sent successfully.</p>
            )}
            {status === "error" && (
                <p style={{ color: "#ffdddd", marginTop: "12px" }}>Something went wrong. Please try again.</p>
            )}
        </form>
    );
}

export default MessageForm;
