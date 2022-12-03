export interface ISettings {
    loggingLevel : boolean;
    renderCookware: boolean;
    renderImages: boolean;
    renderIngredients: boolean;
    renderInlineTimers: boolean;
    renderQuantitiesInline: boolean;
    renderTimers: boolean;
    renderTotalTime: boolean;
    timerTickSound : boolean
    timerEndSound : boolean
}

export class Settings implements ISettings {
    loggingLevel : true;
    renderCookware: true;
    renderImages: true;
    renderIngredients: true;
    renderInlineTimers: true;
    renderQuantitiesInline: true;
    renderTimers: true;
    renderTotalTime: true;
    timerTickSound : true;
    timerEndSound : true;
} 
