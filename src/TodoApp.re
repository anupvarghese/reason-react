let component = ReasonReact.statelessComponent("TodoApp");

let make = _children => {
  ...component,
  render: _self => <div> (ReasonReact.string("Hello")) </div>,
};