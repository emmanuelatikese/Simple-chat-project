import toast from "react-hot-toast";

const SignUpErrorHandler = ({fullname, username, password, confirmedPassword, email, gender}) => {
    if (!fullname || !username || !password || !confirmedPassword || !email || !gender){
        toast.error("Please fill in all fields");
        return false;
    }
    if (password !== confirmedPassword){
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6){
        toast.error("Password should be at least 6 characters long");
        return false;
    }
    return true;
}

export default SignUpErrorHandler;