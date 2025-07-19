'use client'

import Authentication, { Login } from "../../src/pages/Authentication";

export default function SignInPage() {
  return <Authentication child={<Login />} />;
}