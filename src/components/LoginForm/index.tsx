import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function LoginForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    auth.signInWithEmailAndPassword(email.value, password.value);
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input name="email" type="email" placeholder="xxx@xxxx.xx.xx" />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="半角英数字8文字以上"
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
      </form>
      ユーザー登録は<Link to={"/signup"}>こちら</Link>から
    </div>
  );
}

export default LoginForm;
