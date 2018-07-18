type item = {
  title: string,
  completed: bool,
};

type state = {items: list(item)};

type action =
  | AddItem;

let component = ReasonReact.reducerComponent("TodoApp");

let newItem = () => {title: "My new todo", completed: false};

let str = ReasonReact.string;

let make = _children => {
  ...component,
  initialState: () => {items: [{title: "Add to do", completed: false}]},
  reducer: (action, {items}) =>
    switch (action) {
    | AddItem => ReasonReact.Update({items: [newItem(), ...items]})
    },
  render: (self) => {
    let { items } = self.state;
    let numberOfTodos = List.length(items);
    <div>
      (str("Want to add a todo"))
      <button onClick=((_ => self.send(AddItem)))> (str("Add something")) </button>
      <div>
        (
          ReasonReact.array(
            Array.of_list(
              List.map(
                todo =>
                  <div>
                    <div> (str(todo.title)) </div>
                    <div> (str(todo.completed ? "Done" : "Pending")) </div>
                  </div>,
                items,
              ),
            ),
          )
        )
        <div>
          (str("There are " ++ string_of_int(numberOfTodos) ++ " todo(s)"))
        </div>
      </div>
    </div>;
  },
};