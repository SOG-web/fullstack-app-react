// import React,  { useState } from 'react'
// import login from "./services/login";

// function LoginForm() {

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const user = await login({
//         username,
//         password,
//       });
//       setUser(user);
//       setUsername("");
//       setPassword("");
//     } catch (e) {
//       setErrorMessage("wrong credentials");
//       console.log(` app ${e}`);
//       setTimeout(() => {
//         setErrorMessage(null);
//       }, 5000);
//     }
//   };

//   const loginForm = () => (
//     <form onSubmit={handleLogin}>
//       <div>
//         username
//           <input
//           type="text"
//           value={username}
//           name="Username"
//           onChange={({ target }) => setUsername(target.value)}
//         />
//       </div>
//       <div>
//         password
//           <input
//           type="password"
//           value={password}
//           name="Password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">login</button>
//     </form>
//   )

//   const noteForm = () => (
//     <form onSubmit={addNote}>
//       <input
//         value={newNote}
//         onChange={handleNoteChange}
//       />
//       <button type="submit">save</button>
//     </form>
//   )

//   return (
//     <div>

//     </div>
//   )
// }

// export default LoginForm
