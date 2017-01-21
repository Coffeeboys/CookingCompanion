/**
 * Created by Trevor on 1/21/2017.
 */
import * as React from "react";
import VerticalLinearStepper from "./VerticalLinearStepper";

let dummyData = `
      [
        {
          "number":1,
          "step":"Mix everything together lightly with a fork or clean hands.Gently form each hamburger into a patty.Grill over medium heat for 5 minutes on each side or until they are cooked to your preferences.",
          "ingredients":[

          ],
          "equipment":[
            {
              "id":404706,
              "name":"grill",
              "image":"https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
            }
          ]
        },
        {
          "number":2,
          "step":"Remove to a plate and cover with aluminum foil. Rest for 5 minutes and serve immediately with your favorite toppings.",
          "ingredients":[

          ],
          "equipment":[
            {
              "id":404765,
              "name":"aluminum foil",
              "image":"https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"
            }
          ]
        }
      ]`;

class RecipeNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <VerticalLinearStepper steps={JSON.parse(dummyData)}/>
    )
  }
}

export default RecipeNavigator;