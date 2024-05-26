import constate from "constate";
import { useNavigate } from "react-router-dom";
import { Category } from "../data/index";

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

    const randomCategoryPickerHandler = (category) => {
        const categories = Category();
        const categoryArray = categories[category];

        return categoryArray[Math.floor(Math.random() * categoryArray.length)];
    }

    return {
        howItWorksClickHandler,
        playClickHandler,
        categoryClickHandler,
        backClickHandler,
        randomCategoryPickerHandler
    }
}

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };