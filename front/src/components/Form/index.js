import { useState } from "react";

import { Toaster , toast} from "react-hot-toast";

import axios from "axios";

export function Form() {

    const [form, setForm] = useState({
        name: "",
        specie: "Lizard",
        age: 0,
        color: "",
        gender: "Female"
    })

function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
}

async function handleSubmit(e) {
    e.preventDefault()

    try {

        

        await axios.post("http://localhost:4000/pet", form)
        toast.success('Deu bom!')



    } catch (err) {
        console.log(err)
        toast.error("Deu ruim!")
    }
}




  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input id="name" type="text" value={form.name} name="name" onChange={handleChange}/>

      <label htmlFor="specie">Especie:</label>
      <select id="specie" value={form.specie} name="specie" onChange={handleChange}>
        <option value="Dog" >Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
        <option value="Fish">Fish</option>
        <option value="Snake">Snake</option>
        <option value="Lizard">Lizard</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="age">Idade</label>
      <input id="age" type="number" value={form.age} name="age" onChange={handleChange}/>

      <label htmlFor="color">Cor</label>
      <input id="color" type="text" value={form.color} name="color" onChange={handleChange}/>

      <label htmlFor="gender">Sexo</label>
      <select id="gender" value={form.gender} name="gender" onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button>Enviar!</button>
    </form>
    </>
  );
}

// "Dog", "Cat", "Bird", "Fish", "Snake", "Lizard", "Others"
