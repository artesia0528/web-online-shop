import AuthLayout from "../components/Layout/AuthLayout"
import FormLogin from "../components/Fragments/FormLogin"

export default function LoginPage() {
  return (
    <AuthLayout title="Login" type="login">
        <FormLogin />
    </AuthLayout>
  )
}
