import React, { useState } from "react";

function AddHogForm({ addHog }) {

    const initialFormValues = {
        name : "",
        image: "",
        specialty: "",
        greased: false,
        weight: 0,
        "highest medal achieved": ""
    };

    const [formData, setFormData] = useState(initialFormValues);

    function handleFormChange(e) {
        const valType = e.target.type;
        const name = e.target.name;
        let val; 
        if(valType === "checkbox") {
            val = e.target.checked;
        } else if(valType = "number"){
            val = parseFloat(e.target.value);
        } else {
            val = e.target.value;
        }
        
        setFormData({...formData, [name] : val});
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        addHog(formData);
        setFormData(initialFormValues);
    }

    return (
        <div className="new-plant-form">
            <h2>New Hog</h2>
            <form onSubmit={ onSubmitHandler }>
                <input type="text" name="name" placeholder="Hog name" value={ formData.name } onChange={ handleFormChange }/>
                <input type="text" name="image" placeholder="Image URL" value={ formData.image } onChange={ handleFormChange }/>
                <input type="text" name="specialty" placeholder="Being cute" value={ formData.specialty } onChange={ handleFormChange }/>
                <input type="checkbox" name="greased" checked={ formData.greased } onChange={ handleFormChange }/>
                <label></label>
                <input type="number" name="weight" step="0.01" placeholder="Weight" value={ formData.weight } onChange={ handleFormChange }/>
                <button type="submit">Add Hog</button>
            </form>
        </div>
    )
}

export default AddHogForm;