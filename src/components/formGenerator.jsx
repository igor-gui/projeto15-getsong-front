export default function formGenerator(form){
    
    const inputList = form.map((inp, i) => 
    <input 
    key={i} 
    type={inp.type}
    placeholder={inp.placeHolder} 
    name={inp.name} 
    onChange={e => inp.value = e.target.value}
    />
    )

    return inputList
}