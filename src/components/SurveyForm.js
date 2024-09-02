import React from "react";
class SurveyForm extends React.Component {
state = {
'name':'',
'colour':'',
'country':'',
'fruits':[]
};
render() {
    return (
        <React.Fragment>
            <div>
                <label>Name:</label>
                <input 
                    name="name" 
                    type="text" 
                    value={this.state.name}
                    onChange={this.updateFormField}
                />
            </div>
            <div>
                <label>Favourite Colour:</label>
                <input 
                    name="colour" 
                    type="radio" 
                    value="red"
                    checked={this.state.color === 'red'} 
                    onChange={this.updateFormField}
                />Red
                <input 
                    name="colour" 
                    type="radio" 
                    value="blue"
                    checked={this.state.color === 'blue'} 
                    onChange={this.updateFormField}
                />Blue
                <input 
                    name="colour" 
                    type="radio" 
                    value="green"
                    checked={this.state.color === 'green'} 
                    onChange={this.updateFormField}
                />Green
            </div>
            <div>
                <label>Country:</label>
                <select 
                    name="country" 
                    value={this.state.country}
                    onChange={this.updateFormField}
                >
                    <option value="singapore">Singapore</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="indonesia">Indonesia</option>
                </select>
            </div>
            <div>
            <label>Fruits:</label>
            <input type="checkbox" name="fruits" value="apple"
            checked={this.state.fruits.includes('apple')}/>Apple
            <input type="checkbox" name="fruits" value="orange"
            checked={this.state.fruits.includes('orange')}/>Orange
            <input type="checkbox" name="fruits" value="pineapple"
            checked={this.state.fruits.includes('pineapple')}/>Pineapple
            <input type="checkbox" name="fruits" value="durian"
            checked={this.state.fruits.includes('durian')}/>Durian
            
            </div>
            <button>Submit</button>
        </React.Fragment>
    );
}


updateFormField = (e) => {
    this.setState({
    [e.target.name] : e.target.value
    })
    }

};  


export default SurveyForm;
    


        