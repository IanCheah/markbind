import { collateAllIntervals, splitCodeAndIndentation } from './helper';

// I included an extra parameter for the color for all 3 methods 
export class Highlighter {
  static highlightWholeLine(code: string, color: string | null) {
    return `<span class="highlighted" style="background-color: ${color};">${code}\n</span>`;
  }

  static highlightWholeText(code: string, color: string | null) {
    const [indents, content] = splitCodeAndIndentation(code);
    return `<span>${indents}<span class="highlighted" style="background-color: ${color};">${content}</span>\n</span>`;
  }

  static highlightPartOfText(code: string, bounds: Array<[number, number]>, color: string | null) {
    /*
      * Note: As part-of-text highlighting requires walking over the node of the generated
      * html by highlight.js, highlighting will be applied in NodeProcessor instead.
      * hl-data is used to pass over the bounds.
    */
    const mergedBounds = collateAllIntervals(bounds);
    const dataStr = mergedBounds.map(bound => bound.join('-')).join(',');
    return `<span hl-data=${dataStr} style="background-color: ${color};">${code}\n</span>`;
  }
}
