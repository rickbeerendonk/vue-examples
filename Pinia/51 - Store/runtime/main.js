/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { defineStore } from 'pinia';

const store = defineStore('main');

document.getElementById('content').innerText = JSON.stringify(store.state);
