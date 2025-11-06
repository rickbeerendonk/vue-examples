/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

export function addToList(value) {
  const ul = document.getElementById('content');
  const li = document.createElement('li');
  li.innerText = JSON.stringify(value);
  ul.appendChild(li);
}
