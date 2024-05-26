import constate from "constate";
import { useNavigate } from "react-router-dom";

const useApp = () => {
    const navigate = useNavigate();

    const howItWorksClickHandler = () => {
        navigate("/how-it-works");
    }

    const playClickHandler = () => {
        navigate("/select-category");
    }

    const categoryClickHandler = (category) => {
        navigate(`/select-category/${category}`);
    }

    const backClickHandler = () => {
        navigate(-1);
    }

    return {
        howItWorksClickHandler,
        playClickHandler,
        categoryClickHandler,
        backClickHandler
    }
}

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };