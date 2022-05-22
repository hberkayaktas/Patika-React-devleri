import {useState} from 'react';

const initialvalue = {id:0, content: '',completed: '', checked: false }

function Header({addTodo,todos}) {
   
  const [form, setForm]=useState(initialvalue); 

  const onChangeInput= (e) =>{
        setForm({...form, [e.target.name]: e.target.value });
  };
  
  const onSubmit=(e) =>{
        e.preventDefault();
        if(form.content ===''){ return false}
        let max =0;
        todos.map((n)=>{
              if(max<n.id){max = n.id}
        });
        form.id = max+1;
        addTodo([...todos,form]);
        console.log(form);
        setForm(initialvalue)
  };

  return (
    <div>
        <header className='header'>
             <h1>todos</h1>
                <form onSubmit={onSubmit}>
                <input 
                name='content'
                className='new-todo' 
                placeholder='What needs to be done?'
                value={form.content}
                onChange={onChangeInput}
                />
             </form>
       </header>
    </div>
  )
}

export default Header