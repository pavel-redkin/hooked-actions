import {ssFormAdjustForm} from 'ssFormAdjustForm';

const hookNames = {
    SS_FORM_ADJUSTFORM_ADJUSTHEIGHT: 'SS_FORM_ADJUSTFORM_ADJUSTHEIGHT',
}

const mapHookToActions = {
    [hookNames.SS_FORM_ADJUSTFORM_ADJUSTHEIGHT]: ssFormAdjustForm.adjustHeight,
}

export {
    mapHookToActions,
    hookNames
}