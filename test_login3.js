fetch("http://localhost:3000/api/auth/sign-in/social", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ provider: "google", callbackURL: "/donor" })
}).then(res => res.text()).then(console.log).catch(console.error);
