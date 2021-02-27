// проверка всех actions у ssFormAdjustForm - что actions подготовлены как hook-и
// у каждого action в ssFormAdjustForm - есть его hooked action в ssFormAdjustFormHooked

const actions = Object.getOwnPropertyNames(ssFormAdjustForm)
    .filter(
        (propertyName) => typeof ssFormAdjustForm[propertyName] === 'function'
    );

// mapHookToActions

// JS Reflection использовать для поиска соотвествий actions в mapHookToActions
// и смотреть конечное множество на пустоту после поиска соотвествий

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
// https://www.npmjs.com/package/reflect-metadata
// или др либа js для reflection