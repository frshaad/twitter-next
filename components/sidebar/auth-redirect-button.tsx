import RegisterButton from './register-button';

export default function AuthRedirectButton() {
  return (
    <div className="flex w-min flex-col gap-2">
      <RegisterButton type="signIn" />
      <RegisterButton type="signUp" />
    </div>
  );
}
