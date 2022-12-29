import React from "react";

function AddHogForm() {
    return (
        <div className="new-plant-form">
            <h2>New Plant</h2>
            <form onSubmit={ onSubmitHandler }>
                <input type="text" name="name" placeholder="Plant name" value={ formData.name } onChange={ handleFormChange }/>
                <input type="text" name="image" placeholder="Image URL" value={ formData.image } onChange={ handleFormChange }/>
                <input type="number" name="price" step="0.01" placeholder="Price" value={ formData.price } onChange={ handleFormChange }/>
                <button type="submit">Add Plant</button>
            </form>
        </div>
    )
}

export default AddHogForm;