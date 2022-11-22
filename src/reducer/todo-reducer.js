export default function todoReducer(todos = [], action) {
  switch (action.type) {
    case "CREATE": {
      const { name } = action;
      if (name.length === 0) return [...todos];
      return [...todos, { name, isComplete: false }];
    }
    case "UPDATE": {
      const { todo } = action;
      return todos.map((item) => {
        if (item.name === todo.name) {
          // todo.isComplete = !todo.isComplete;
          // console.log(todo);
          // return todo;

          //above code doesn't work because of they point at the same reference
          //but below returns a new object
          return { ...item, isComplete: !todo.isComplete };
        }
        return item;
      });
    }
    case "DELETE": {
      const { todo } = action;
      return todos.filter((el) => el.name !== todo.name);
    }
    case "Active": {
      const todosCopy = [...todos];
      return todosCopy.filter((el) => el.isComplete === false);
    }
    case "All": {
      return todos;
    }
    default: {
      return todos;
    }
  }
}
