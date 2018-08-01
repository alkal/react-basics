import React from 'react';

const FormFields = (props) => {

    const renderTemplates = (data)=>{
        let formTemplates=null;
        let values=data.settings;

        switch(values.element){
            case('input'):
                formTemplates=(
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <input
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event)=>changeHandler(event,data.id)
                            }
                        />
                        {showValidationMessage(values)}
                    </div>
                )
                break;
            case('textarea'):
                formTemplates=(
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <textarea
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event)=>changeHandler(event,data.id)
                            }
                        />
                    </div>
                )
                break;
            case('select'):
                formTemplates=(
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <select
                            value={values.value}
                            name={values.config.name}
                            onChange={
                                (event)=>changeHandler(event,data.id)
                            }
                        >
                            {values.config.options.map((item,i)=>(
                                <option key={i} value={item.val}>{item.text}</option>
                            ))}
                        </select>
                    </div>
                )
                break;
            default:
                formTemplates=null;
                break;
        }

        return formTemplates;
    }

    const showValidationMessage = (data)=>{
        let errorMessage=null;

        if(data.validation&&!data.valid){
            errorMessage=(
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const showLabel=(show,label)=>{
        return show ? 
            <div>
                <label>{label}</label>
            </div>
            :
            null
    
    }

    const changeHandler=(event,id)=>{
        const newState=props.formData;
        newState[id].value=event.target.value;
        
        let validData=validate(newState[id]);
        newState[id].valid=validData[0];
        newState[id].validationMessage=validData[1];
        
        
        props.change(newState);
    }

    const validate=(element)=>{

        let error=[true,''];

        if(element.validation.minLen){
            const valid=element.value.length>=element.validation.minLen;
            const message=`${valid?'':`Must be greater than ${element.validation.minLen} characters`}`;

            error=valid? error:[valid,message];
        }
        
        if(element.validation.required){
            const valid=element.value.trim()!=='';
            const message=`${valid?'':'This field is required'}`;

            error=valid? error:[valid,message];
        }

        return error;
    }
    
    const renderFields=()=>{

        const formArray=[];

        for(let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]
            })
        }

        return formArray.map((item,i)=>{
            return(
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })

    }

    
    
    
    return(
        <div>
            <h1> React Form (Use Case) </h1>
            {renderFields()}
        </div>
    )
}

export default FormFields;