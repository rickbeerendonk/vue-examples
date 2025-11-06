/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

// Logger plugin for Pinia
export function loggerPlugin({ store }) {
  const log = document.getElementById('log');

  log.innerHTML += `<p>Store "${store.$id}" initialized</p>`;

  store.$subscribe((mutation, state) => {
    log.innerHTML += `<p>[${store.$id}] ${mutation.type}: ${JSON.stringify(state)}</p>`;
    console.log(`[${store.$id}]`, mutation.type, state);
  });

  return {};
}
