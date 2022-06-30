import { useState } from "react";
import "./AddNewPage.css"


const AddNewPage = ({addNewPageToState}) => {

    const [newTitle, setNewTitle] = useState("");

    const handleCategoryAdd = (event) => {
        addNewCategoryToState(newTitle);
    }

    const handleCoverClick = () => {
        const form = document.querySelector(".addNewCategory-form");
        form.style.display = "block";
        const cover = document.querySelector(".form-cover")
        cover.style.display = "none";
    }