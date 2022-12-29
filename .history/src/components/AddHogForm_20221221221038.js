import React from "react";

/*
 name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image: url
*/
function AddHogForm() {

    const initialFormValues = {
        name : "",
        image: "",
        specialty: ""

    }

    return (
        <div className="new-plant-form">
            <h2>New Hog</h2>
            <form onSubmit={ onSubmitHandler }>
                <input type="text" name="name" placeholder="Hog name" value={ formData.name } onChange={ handleFormChange }/>
                <input type="text" name="image" placeholder="Image URL" value={ formData.image } onChange={ handleFormChange }/>
                <input type="number" name="price" step="0.01" placeholder="Price" value={ formData.price } onChange={ handleFormChange }/>
                <button type="submit">Add Plant</button>
            </form>
        </div>
    )
}

export default AddHogForm;