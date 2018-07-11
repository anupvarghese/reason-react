type item = {
  title: string,
  completed: bool,
};

type state = {items: list(item)};

let component = ReasonReact.reducerComponent("TodoApp");

let make = _children => {
  ...component,
  initialState: () => {items: [{title: "Add to do", completed: false}]},
  reducer: ((), _) => ReasonReact.NoUpdate,
  render: ({state: {items}}) => {
    let numberOfTodos = List.length(items);
    <div> (ReasonReact.string("There are " ++ string_of_int(numberOfTodos) ++ " todo(s)")) </div>
  },
};