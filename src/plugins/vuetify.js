import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import  { VuetifyDateAdapter } from
"Vuetify/labs/date/adapters/vuetify";
import * as directives from 'vuetify/directives'
export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
    date: {
        adapter: VuetifyDateAdapter
    }
})