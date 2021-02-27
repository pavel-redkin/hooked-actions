import {
    mapHookToActions as mapHookToActionsA,
    hookNames as hookNamesA
} from 'ssFormAdjustForm';

import {
    mapHookToActions as mapHookToActionsB,
    hookNames as hookNamesB
} from './ssFormAdjustFormHooked'; // ssFormDialog

// @todo использовать assert для проверки дублей hookNames{A,B}, mapHookToActions{A,B}
//

export const HOOKS = Object.assign({}, hookNamesA, hookNamesB);

const MAP_HOOK_TO_ACTIONS = Object.assign({}, mapHookToActionsA, mapHookToActionsB);

export const useHook = (/* string */ hookName, /* Object */ props) => {
    const action = !!MAP_HOOK_TO_ACTIONS[hookName] && MAP_HOOK_TO_ACTIONS[hookName].action;
    if (!!action) {
        action.apply(null, props);
    }
}

// ssFormAdjustForm.adjustHeight(arguments)
// useHook(HOOKS.SS_FORM_ADJUSTFORM_ADJUSTHEIGHT, {props: arguments})