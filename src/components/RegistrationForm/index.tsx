import { FormEvent } from "react";
import { auth } from "../../firebase";

function RegistrationForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    //バリデーションチェックを実装したい 正規表現を使えばOK?
    auth.createUserWithEmailAndPassword(email.value, password.value);
  };

  return (
    <div>
      <h2>ユーザー登録</h2>
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
          <button>登録する</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
