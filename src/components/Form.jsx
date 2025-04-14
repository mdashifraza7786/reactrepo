import { useState } from "react"

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (event)=>{setName(event.target.value)}
    const handleEmail = (event)=>{setEmail(event.target.value)}
    const handlePassword = (event)=>{setPassword(event.target.value)}

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = {
            username:name,
            useremail:email,
            userpassword:password
        }

        console.log(formData)
        setName("");
        setEmail("");
        setPassword("");
    }
    return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 w-50% bg-cyan-800  m-auto p-4 justify-center items-center">
                        <h1 className="text-3xl font-bold mb-4">Form</h1>
                        <input type="text" placeholder="Enter Name" value={name} onChange={handleName} className="px-4 py-2 rounded"/>
                        <input type="email" placeholder="Enter Email" value={email} onChange={handleEmail} className="px-4 py-2 rounded"/>
                        <input type="password" placeholder="Enter Password" value={password} onChange={handlePassword} className="px-4 py-2 rounded"/>
                        <button className="bg-green-600 px-4 py-2 rounded">Submit</button>
                    </div>
                </form>
            </>
    )
}