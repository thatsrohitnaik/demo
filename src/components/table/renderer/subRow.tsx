import React from 'react';
import { ICellRendererParams, ICellRendererComp } from 'ag-grid-community';
import './style.css';

type ICellRendererParamsCustom = ICellRendererParams & { subField: string };

export default class SubRow implements ICellRendererComp {
  ui: any;

  init(params: ICellRendererParamsCustom) {
    const cellBlank = !params.value;
    if (cellBlank) {
      return;
    }
    console.log(params.value.length);
    this.ui = document.createElement('div');

    let cell = '';
    params.value.map((val) => {
      cell = cell + '<div class="">' + val[params?.subField] + '</div>';
    });

    this.ui.innerHTML = '<div class="celldisplay">' + cell + '</div>';
  }

  getGui() {
    return this.ui;
  }

  refresh() {
    return false;
  }
}
