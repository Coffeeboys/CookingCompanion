import DefinitionPopover from '../components/js/DefinitionPopover';
import React from 'react';

let definitions = new Map();
definitions.set("hamburger", "just do it");
definitions.set("mix", "blend well");
definitions.set("broil", "to cook by direct heat, in an oven under the heat");
definitions.set("saute", "cook in a small amount of fat, pan-fry");
definitions.set("mince", "to cut or chop into very small pieces");
definitions.set("simmer","to cook in a liquid at or just below the boiling point");
function parseDefinitions (input) {
  let words = input.split(' ');

  return (
    <div>
      {
        words.map((word, i) => {
          let lowerCaseWord = word.toLowerCase();
          let definition = definitions.get(lowerCaseWord);
          if ( definition != undefined) {
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
