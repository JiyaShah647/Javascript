            const inp_box=document.querySelector(".todo-input");
            const addBtn=document.querySelector(".add-btn");
            const todo_list=document.querySelector(".todo-list")
            function addTodo()
            {
                const todo_text=inp_box.value;
                const todo=document.createElement('li')
                todo.textContent=todo_text;
                const delBtn=document.createElement('button');
                const editBtn=document.createElement('button');
                delBtn.textContent= "Delete";
                editBtn.textContent="Edit";
                delBtn.onclick=function()
                {
                    this.parentElement.remove()
                }
                editBtn.onclick=function()
                {
                    const new_todo_text= prompt("Enter Value:",this.parentElement.textContent.slice(0,-10));
                    console.log(new_todo_text);
                    this.parentElement.textContent=new_todo_text;
                    todo.appendChild(delBtn);
                    todo.appendChild(editBtn);
                }
                todo.appendChild(delBtn);
                todo.appendChild(editBtn);
                todo_list.appendChild(todo);
            }
