import DefinitionPopover from '../components/js/DefinitionPopover';
import React from 'react';

let definitions = new Map();
definitions.set("hamburger", "just do it");
definitions.set("baste", "to brush, squirt or pour drippings, fat or liquid, over food while broiling, roasting or baking to prevent drying out; develops a crusty exterior and improves flavor and appearance of product being cooked");
definitions.set("braise", "a method of cooking that involves browning meat with vegetables in fat, oil or butter first, then slowly cooking the food in a small amount of liquid; a pot roast is often cooked this way");
definitions.set("broil", "to cook by direct heat, in an oven under the heat");
definitions.set("brown", "quickly searing food to enhance flavor; most often done at the beginning of the cooking process");
definitions.set("caramelize", "a process of cooking sugar (usually with oil or butter) until it begins to color; foods containing natural sugars will caramelize in their own sugars");
definitions.set("chop", "to cut into non-uniformed pieces or rough cut");
definitions.set("crush", "to reduce food to small particles using a tool (rolling pin or mortar and pestle)");
definitions.set("cube", "to cut up into regular sizes");
definitions.set("dice", "to cut into regular sized cubes; small, medium or large");
definitions.set("fold", "combining two or more products with a spatula or spoon using a side-to-side motion or a top-to-bottom motion");
definitions.set("grill", "to cook directly over a heat source on metal racks");
definitions.set("hull", "to remove the leafy parts of fruits");
definitions.set("knead", "to press and fold dough in order to give it a smoother consistency needed for leavening");
definitions.set("marinate", "to cover a food item with a liquid substance");
definitions.set("mince", "to chop into very fine pieces");
definitions.set("mix", "blend well");
definitions.set("nap", "to cover a food item with a thin, even layer of sauce");
definitions.set("pan fry", "to cook in a moderate amount of fat, uncovered");
definitions.set("pinch", "a measurement of less than 1/16th of a teaspoon (same as \"dash\")");
definitions.set("poach", "to cook very gently (slowly) in a liquid that is hot but not boiling or bubbling");
definitions.set("reduce", "to cook by simmering or boiling until its volume is decreased in order to concentrate flavors");
definitions.set("roast", "to cook foods by surrounding them with hot, dry air in an oven (uncovered) or on a spit over an open fire");
definitions.set("saute", "cook in a small amount of fat, pan-fry");
definitions.set("sear", "to seal in the juices of meat by quickly browning it on all sides in a very hot pan");
definitions.set("simmer","to cook in a liquid at or just below the boiling point");
definitions.set("stew", "to gradually cook ingredients in a covered pot for a long time (until tender");
definitions.set("sweat", "to cook in a very small amount of fat over low heat (sometimes covered) without browning to release flavors and moisture");
definitions.set("whisk", "to quickly mix air into ingredients; also the name of a cooking tool.");

function parseDefinitions (input) {
  let words = input.split(' ');

  return (
    <div>
      {
        words.map((word, i) => {
          let lowerCaseWord = word.toLowerCase();
          let definition = definitions.get(lowerCaseWord);
          if ( definition !== undefined) {
            return <DefinitionPopover key={i} text={word + ' '} description={definition}/>;
          } else {
            return word + ' ';
          }
        })
      }
    </div>
  )
}

export default parseDefinitions;
