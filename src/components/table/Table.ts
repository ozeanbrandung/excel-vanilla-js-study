import {Component} from "../../core/Component";

export class Table extends Component {
    static className: string = 'excel__table';

    constructor(private _rootElemInstance) {
        super(_rootElemInstance, {});
    }

    toHtml(): string {
        //return super.toHtml();
        return `
            <div class="row">

        <div class="row-info"></div>

        <div class="row-data">
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>

        </div>

      </div>

            <div class="row">
        <div class="row-info">
          1
        </div>

        <div class="row-data">
          <div class="cell selected" contenteditable="">A1</div>
          <div class="cell" contenteditable="">B2</div>
          <div class="cell" contenteditable="">C3</div>
        </div>
      </div>

            <div class="row">
        <div class="row-info">
          2
        </div>

        <div class="row-data">
          <div class="cell">A1</div>
          <div class="cell">B2</div>
          <div class="cell">C3</div>
        </div>
      </div>
        `;
    }
}