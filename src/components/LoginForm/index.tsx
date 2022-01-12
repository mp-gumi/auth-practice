import { FormEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { FirebaseError } from "@firebase/util";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value);
    },
    []
  );
  const handleChangePassword = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
    },
    []
  );
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setErrorMessage("");
        navigate("/");
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          if (error.code === "auth/invalid-email") {
            setErrorMessage("メールアドレスが正しくありません");
          }
          if (error.code === "auth/wrong-password") {
            setErrorMessage("パスワードが正しくありません");
          }
          if (error.code === "auth/user-not-found") {
            setErrorMessage("このメールアドレスは登録されていません");
          }
        }
      }
    },
    [email, navigate, password]
  );

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="xxx@xxx.xxx"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="半角英数字8文字以上"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          {errorMessage && (
            <p style={{ color: "red", fontSize: 12 }}>{errorMessage}</p>
          )}
        </div>
        <div>
          {email && password ? (
            <button>ログイン</button>
          ) : (
            <button disabled>ログイン</button>
          )}
        </div>
      </form>
      ユーザー登録は<Link to={"/signup"}>こちら</Link>から
    </div>
  );
}

export default LoginForm;
