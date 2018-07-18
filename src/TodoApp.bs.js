// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("TodoApp");

function newItem() {
  return /* record */[
          /* title */"My new todo",
          /* completed */false
        ];
}

function str(prim) {
  return prim;
}

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1];
              var items = match[/* items */0];
              var numberOfTodos = List.length(items);
              return React.createElement("div", undefined, "Want to add a todo", React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */3], /* AddItem */0);
                                })
                            }, "Add something"), React.createElement("div", undefined, $$Array.of_list(List.map((function (todo) {
                                        var match = todo[/* completed */1];
                                        return React.createElement("div", undefined, React.createElement("div", undefined, todo[/* title */0]), React.createElement("div", undefined, match ? "Done" : "Pending"));
                                      }), items)), React.createElement("div", undefined, "There are " + (String(numberOfTodos) + " todo(s)"))));
            }),
          /* initialState */(function () {
              return /* record */[/* items : :: */[
                        /* record */[
                          /* title */"Add to do",
                          /* completed */false
                        ],
                        /* [] */0
                      ]];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, param) {
              return /* Update */Block.__(0, [/* record */[/* items : :: */[
                            /* record */[
                              /* title */"My new todo",
                              /* completed */false
                            ],
                            param[/* items */0]
                          ]]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.newItem = newItem;
exports.str = str;
exports.make = make;
/* component Not a pure module */
