import "./app.css";
import { useForm } from "react-hook-form";

export function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Important for sending JSON
      },
      body: JSON.stringify(data),
    });
    let res = r.text();
    console.log(data, res);
    // await delay(4); // simulator network delay
    console.log(typeof data);
    // if (data.username !== "Shubham"){
    //   setError("myForm", {message: "Your Form is not in good order beacuse credentials are invalid"})
    // }
    // if(data.username == "rohan") {
    //   setError("blocked", {
    //     message: "Sorry this user is Blocked"
    //   })

    // }
  };

  return (
    <div>
      <div className="container">
        {isSubmitting && <div>Loading...</div>}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "Min length of password is 6" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" id="" />
          {/* {errors.myForm && (
            <div className="red">{errors.myForm.message}</div>
          )}
          {errors.blocked && (
            <div className="red">{errors.blocked.message}</div>
          )} */}
        </form>
      </div>
    </div>
  );
}
