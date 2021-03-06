import { JEle, jQuery as $ } from "./tiny-libs/jquery";
import { IRegionIndex } from "./data";
import { IDrawData } from "./draw";

export class PageManager {

    $regionList: JEle = $('#region-list');
    $currentRegion = $('#current-region');
    $statucDraw = $('#status-draw');

    $buttonStartDraw = $('#start-draw');
    $buttonUndoDraw = $('#undo-draw');
    $buttonOutputDraw = $('#output-draw');
    $buttonClearDraw = $('#clear-draw');

    fillRegions(allRegions: Map<string, IRegionIndex>): void {

        for (const [key, region] of allRegions) {
            const $item = $(`<a class="dropdown-item" href="#${key}">${region.name}</a>`);
            this.$regionList.append($item);
        }
    }

    setCurrentRegion(region: IRegionIndex): void {
        this.$currentRegion.text(`区域选择:${region.name}`);
    }

    setDrawStatus(data: IDrawData) {
        if (data) {
            this.$statucDraw.text(`绘制中：${data.name}`);
        } else {
            this.$statucDraw.text('绘图');
        }
    }

    onStartDraw(fn: () => void): void { this.$buttonStartDraw.click(fn); }
    onUndoDraw(fn: () => void): void { this.$buttonUndoDraw.click(fn); }
    onOutputDraw(fn: () => void): void { this.$buttonOutputDraw.click(fn); }
    onClearDraw(fn: () => void): void { this.$buttonClearDraw.click(fn); }
}