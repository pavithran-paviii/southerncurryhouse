'use client'

import Authentication, { SignUp } from "../../src/pages/Authentication";

export default function SignUpPage() {
  return <Authentication child={<SignUp />} />;
}