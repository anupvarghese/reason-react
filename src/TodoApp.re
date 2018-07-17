type item = {
  title: string,
  completed: bool,
};

type state = {items: list(item)};

let component = ReasonReact.reducerComponent("TodoApp");

let str = ReasonReact.string

let make = _children => {
  ...component,
  initialState: () => {items: [{title: "Add to do", completed: false}]},
  reducer: ((), _) => ReasonReact.NoUpdate,
  render: ({state: {items}}) => {
    let numberOfTodos = List.length(items);
    <div>
      (ReasonReact.array(
        Array.of_list(
          List.map((todo) =>
            <div>
              <div>(str(todo.title))</div>
              <div>(str(todo.completed ? "Done" : "Pending"))</div>
            </div>,
            items
          )
        )
      ))

      <div> (str("There are " ++ string_of_int(numberOfTodos) ++ " todo(s)")) </div>
    </div>
  },
};