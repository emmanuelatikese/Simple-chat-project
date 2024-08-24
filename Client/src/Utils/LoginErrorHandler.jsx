import toast from "react-hot-toast";
const LoginErrorHandler = ({username, password}) => {
    if (!username || !password){
        toast.error("Please fill in all fields");
        return false;
    }
    
    return true;
}

export default LoginErrorHandler;