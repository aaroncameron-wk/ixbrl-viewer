// See COPYRIGHT.md for copyright information

import $ from 'jquery';
import { Dialog } from './dialog.js';

export class UnitLegend extends Dialog {
    constructor() {
        super(".dialog.unitlegend");
    }

    /*
     * Create a bar chart show fact values broken down along up to two dimensions
     */
    showUnitLegend(utrEntries) {
        const c = this.node;
        $("canvas", c).remove();
        $("<canvas>").appendTo($(".unit-legend-container", c));
        this.show();

        /* Create controls for adding or removing aspects for analysis */
        $(".unit-legend-container tbody", c).empty();
        utrEntries.forEach((utrEntry) => {
            // TODO: Add row for each utrEntry
        });
    }
}
