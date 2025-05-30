import { Anchor, Button, Checkbox, CheckIcon, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk
        label="Full Name"
       
        placeholder="Your Name"
      />
      <TextInput withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="email"
        placeholder="Your email"
      />
       <PasswordInput  
      label="Password"
      leftSection = {<IconLock size={18} stroke={1.5} />}
      withAsterisk
      placeholder="Password"
    />
       <PasswordInput  
      label="Conform Password"
      leftSection = {<IconLock size={18} stroke={1.5} />}
      withAsterisk
      placeholder="Conform Password"
    />
    <Checkbox autoContrast label={<>I accept {''}<Anchor>terms & conditions</Anchor></>}/>
    <Button autoContrast variant="filled">Sign Up</Button>
    <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link></div>
    </div>
  );
};

export default SignUp;
