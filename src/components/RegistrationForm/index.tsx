import { FormEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      //バリデーションチェックを実装したい 正規表現を使えばOK?
      auth.createUserWithEmailAndPassword(email, password);
      navigate("/");
    },
    [email, navigate, password]
  );

  return (
    <div>
      <h2>ユーザー登録</h2>
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
          {email && password ? (
            <button>登録する</button>
          ) : (
            <button disabled>登録する</button>
          )}
        </div>
      </form>
      ユーザーを登録済みの方は<Link to={"/signin"}>こちら</Link>から
    </div>
  );
}

export default RegistrationForm;
