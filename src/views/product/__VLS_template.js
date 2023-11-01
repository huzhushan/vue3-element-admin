import { __VLS_componentsOption, __VLS_name, mqttConfig, connectMqtt, disconnectMqtt, subscribeConfig, subscribeMqtt, tableData, deleteRow, sendMqttData } from './mqtt.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ElForm', typeof __VLS_localComponents, "ElForm", "elForm", "el-form"> &
__VLS_WithComponent<'ElFormItem', typeof __VLS_localComponents, "ElFormItem", "elFormItem", "el-form-item"> &
__VLS_WithComponent<'ElInput', typeof __VLS_localComponents, "ElInput", "elInput", "el-input"> &
__VLS_WithComponent<'ElRow', typeof __VLS_localComponents, "ElRow", "elRow", "el-row"> &
__VLS_WithComponent<'ElButton', typeof __VLS_localComponents, "ElButton", "elButton", "el-button"> &
__VLS_WithComponent<'ElDivider', typeof __VLS_localComponents, "ElDivider", "elDivider", "el-divider"> &
__VLS_WithComponent<'ElContainer', typeof __VLS_localComponents, "ElContainer", "elContainer", "el-container"> &
__VLS_WithComponent<'ElHeader', typeof __VLS_localComponents, "ElHeader", "elHeader", "el-header"> &
__VLS_WithComponent<'ElSelect', typeof __VLS_localComponents, "ElSelect", "elSelect", "el-select"> &
__VLS_WithComponent<'ElOption', typeof __VLS_localComponents, "ElOption", "elOption", "el-option"> &
__VLS_WithComponent<'ElMain', typeof __VLS_localComponents, "ElMain", "elMain", "el-main"> &
__VLS_WithComponent<'ElTable', typeof __VLS_localComponents, "ElTable", "elTable", "el-table"> &
__VLS_WithComponent<'ElTableColumn', typeof __VLS_localComponents, "ElTableColumn", "elTableColumn", "el-table-column">;
__VLS_components.ElForm; __VLS_components.ElForm; __VLS_components.ElForm; __VLS_components.ElForm; __VLS_components.elForm; __VLS_components.elForm; __VLS_components.elForm; __VLS_components.elForm; __VLS_components["el-form"]; __VLS_components["el-form"]; __VLS_components["el-form"]; __VLS_components["el-form"];
// @ts-ignore
[ElForm, ElForm, ElForm, ElForm,];
__VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"];
// @ts-ignore
[ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem,];
__VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"]; __VLS_components["el-input"];
// @ts-ignore
[ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput, ElInput,];
__VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components["el-row"]; __VLS_components["el-row"];
// @ts-ignore
[ElRow, ElRow,];
__VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"];
// @ts-ignore
[ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton,];
__VLS_components.ElDivider; __VLS_components.elDivider; __VLS_components["el-divider"];
// @ts-ignore
[ElDivider,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.ElContainer; __VLS_components.ElContainer; __VLS_components.elContainer; __VLS_components.elContainer; __VLS_components["el-container"]; __VLS_components["el-container"];
// @ts-ignore
[ElContainer, ElContainer,];
__VLS_components.ElHeader; __VLS_components.ElHeader; __VLS_components.elHeader; __VLS_components.elHeader; __VLS_components["el-header"]; __VLS_components["el-header"];
// @ts-ignore
[ElHeader, ElHeader,];
__VLS_components.ElSelect; __VLS_components.ElSelect; __VLS_components.elSelect; __VLS_components.elSelect; __VLS_components["el-select"]; __VLS_components["el-select"];
// @ts-ignore
[ElSelect, ElSelect,];
__VLS_components.ElOption; __VLS_components.ElOption; __VLS_components.ElOption; __VLS_components.ElOption; __VLS_components.ElOption; __VLS_components.ElOption; __VLS_components.elOption; __VLS_components.elOption; __VLS_components.elOption; __VLS_components.elOption; __VLS_components.elOption; __VLS_components.elOption; __VLS_components["el-option"]; __VLS_components["el-option"]; __VLS_components["el-option"]; __VLS_components["el-option"]; __VLS_components["el-option"]; __VLS_components["el-option"];
// @ts-ignore
[ElOption, ElOption, ElOption, ElOption, ElOption, ElOption,];
__VLS_components.ElMain; __VLS_components.ElMain; __VLS_components.elMain; __VLS_components.elMain; __VLS_components["el-main"]; __VLS_components["el-main"];
// @ts-ignore
[ElMain, ElMain,];
__VLS_components.ElTable; __VLS_components.ElTable; __VLS_components.elTable; __VLS_components.elTable; __VLS_components["el-table"]; __VLS_components["el-table"];
// @ts-ignore
[ElTable, ElTable,];
__VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"];
// @ts-ignore
[ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
{
let __VLS_0!: 'ElForm' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElForm : 'elForm' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elForm : 'el-form' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElForm'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, inline: ((true)), model: ((__VLS_ctx.mqttConfig)), ref: ("mqttConfig"), labelWidth: ("120px"), }));
({} as { ElForm: typeof __VLS_0; }).ElForm;
({} as { ElForm: typeof __VLS_0; }).ElForm;
const __VLS_2 = __VLS_1({ ...{}, inline: ((true)), model: ((__VLS_ctx.mqttConfig)), ref: ("mqttConfig"), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, inline: ((true)), model: ((__VLS_ctx.mqttConfig)), ref: ("mqttConfig"), labelWidth: ("120px"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
// @ts-ignore
(__VLS_ctx.mqttConfig);
{
let __VLS_5!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, label: ("Broker Address"), }));
({} as { ElFormItem: typeof __VLS_5; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_5; }).ElFormItem;
const __VLS_7 = __VLS_6({ ...{}, label: ("Broker Address"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, label: ("Broker Address"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
let __VLS_10!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.brokerAddress)), placeholder: ((__VLS_ctx.localhost)), }));
({} as { ElInput: typeof __VLS_10; }).ElInput;
({} as { ElInput: typeof __VLS_10; }).ElInput;
const __VLS_12 = __VLS_11({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.brokerAddress)), placeholder: ((__VLS_ctx.localhost)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.brokerAddress)), placeholder: ((__VLS_ctx.localhost)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
{
let __VLS_15!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, label: ("Port"), }));
({} as { ElFormItem: typeof __VLS_15; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_15; }).ElFormItem;
const __VLS_17 = __VLS_16({ ...{}, label: ("Port"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, label: ("Port"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
let __VLS_20!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.port)), placeholder: ((8083)), }));
({} as { ElInput: typeof __VLS_20; }).ElInput;
({} as { ElInput: typeof __VLS_20; }).ElInput;
const __VLS_22 = __VLS_21({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.port)), placeholder: ((8083)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.port)), placeholder: ((8083)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
{
let __VLS_25!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, label: ("Client ID"), }));
({} as { ElFormItem: typeof __VLS_25; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_25; }).ElFormItem;
const __VLS_27 = __VLS_26({ ...{}, label: ("Client ID"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, label: ("Client ID"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
let __VLS_30!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.clientId)), placeholder: ((__VLS_ctx.emqx_test)), }));
({} as { ElInput: typeof __VLS_30; }).ElInput;
({} as { ElInput: typeof __VLS_30; }).ElInput;
const __VLS_32 = __VLS_31({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.clientId)), placeholder: ((__VLS_ctx.emqx_test)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.clientId)), placeholder: ((__VLS_ctx.emqx_test)), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
(__VLS_28.slots!).default;
}
{
let __VLS_35!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, label: ("Path"), }));
({} as { ElFormItem: typeof __VLS_35; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_35; }).ElFormItem;
const __VLS_37 = __VLS_36({ ...{}, label: ("Path"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, label: ("Path"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
let __VLS_40!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.path)), placeholder: ((/mqtt)), }));/({} as { ElInput: typeof __VLS_40; }).ElInput)) }({} as { ElInput: typeof __VLS_40; }).ElInput));
const __VLS_42 = __VLS_41({
...{}, modelValue: ((__VLS_ctx.mqttConfig.path)), placeholder: ((/mqtt)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));/({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({
...{}, modelValue: ((__VLS_ctx.mqttConfig.path)), placeholder: ((/mqtt)), });/)),
const: __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!,
let, __VLS_44: __VLS_NormalizeEmits < typeof __VLS_43.emit > 
                    }(__VLS_38.slots!).default)))
},
{
let, __VLS_45: 'ElFormItem', extends: keyof, typeof: __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem', extends: keyof, typeof: __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item', extends: keyof, typeof: __VLS_ctx ? typeof __VLS_ctx['el-form-item'] : typeof __VLS_resolvedLocalAndGlobalComponents['ElFormItem'],
const: __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, label: ("Username"), }))
}({} as { ElFormItem: typeof __VLS_45; }).ElFormItem);
({} as { ElFormItem: typeof __VLS_45; }).ElFormItem;
const __VLS_47 = __VLS_46({ ...{}, label: ("Username"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, label: ("Username"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
let __VLS_50!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.username)), }));
({} as { ElInput: typeof __VLS_50; }).ElInput;
({} as { ElInput: typeof __VLS_50; }).ElInput;
const __VLS_52 = __VLS_51({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.username)), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
}
(__VLS_48.slots!).default;
}
{
let __VLS_55!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, label: ("Password"), }));
({} as { ElFormItem: typeof __VLS_55; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_55; }).ElFormItem;
const __VLS_57 = __VLS_56({ ...{}, label: ("Password"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, label: ("Password"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
{
let __VLS_60!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.password)), }));
({} as { ElInput: typeof __VLS_60; }).ElInput;
({} as { ElInput: typeof __VLS_60; }).ElInput;
const __VLS_62 = __VLS_61({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.mqttConfig.password)), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
}
(__VLS_58.slots!).default;
}
(__VLS_3.slots!).default;
}
{
let __VLS_65!: 'ElRow' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElRow : 'elRow' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elRow : 'el-row' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-row'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElRow'];
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, gutter: ((20)), justify: ('space-evenly'), }));
({} as { ElRow: typeof __VLS_65; }).ElRow;
({} as { ElRow: typeof __VLS_65; }).ElRow;
const __VLS_67 = __VLS_66({ ...{}, gutter: ((20)), justify: ('space-evenly'), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, gutter: ((20)), justify: ('space-evenly'), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
{
let __VLS_70!: 'ElButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElButton : 'elButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elButton : 'el-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElButton'];
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{ onClick: {} as any, }, type: ("primary"), }));
({} as { ElButton: typeof __VLS_70; }).ElButton;
({} as { ElButton: typeof __VLS_70; }).ElButton;
const __VLS_72 = __VLS_71({ ...{ onClick: {} as any, }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("primary"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
let __VLS_75 = { 'click': __VLS_pickEvent(__VLS_74['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_72>).onClick) };
__VLS_75 = { click: (__VLS_ctx.connectMqtt) };
(__VLS_73.slots!).default;
}
{
let __VLS_76!: 'ElButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElButton : 'elButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elButton : 'el-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElButton'];
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{ onClick: {} as any, }, type: ("danger"), }));
({} as { ElButton: typeof __VLS_76; }).ElButton;
({} as { ElButton: typeof __VLS_76; }).ElButton;
const __VLS_78 = __VLS_77({ ...{ onClick: {} as any, }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("danger"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
let __VLS_81 = { 'click': __VLS_pickEvent(__VLS_80['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_78>).onClick) };
__VLS_81 = { click: (__VLS_ctx.disconnectMqtt) };
(__VLS_79.slots!).default;
}
(__VLS_68.slots!).default;
}
{
let __VLS_82!: 'ElDivider' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElDivider : 'elDivider' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elDivider : 'el-divider' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-divider'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElDivider'];
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{}, }));
({} as { ElDivider: typeof __VLS_82; }).ElDivider;
const __VLS_84 = __VLS_83({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
}
{
const __VLS_87 = __VLS_intrinsicElements["div"];
const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
const __VLS_89 = __VLS_88({ ...{}, class: ("subscribe-layout"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, class: ("subscribe-layout"), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
{
let __VLS_92!: 'ElContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElContainer : 'elContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elContainer : 'el-container' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-container'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElContainer'];
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{}, }));
({} as { ElContainer: typeof __VLS_92; }).ElContainer;
({} as { ElContainer: typeof __VLS_92; }).ElContainer;
const __VLS_94 = __VLS_93({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
{
let __VLS_97!: 'ElHeader' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElHeader : 'elHeader' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elHeader : 'el-header' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-header'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElHeader'];
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, }));
({} as { ElHeader: typeof __VLS_97; }).ElHeader;
({} as { ElHeader: typeof __VLS_97; }).ElHeader;
const __VLS_99 = __VLS_98({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
{
let __VLS_102!: 'ElForm' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElForm : 'elForm' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elForm : 'el-form' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElForm'];
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{}, inline: ((true)), model: ((__VLS_ctx.subscribeConfig)), ref: ("Subscribe"), labelWidth: ("120px"), }));
({} as { ElForm: typeof __VLS_102; }).ElForm;
({} as { ElForm: typeof __VLS_102; }).ElForm;
const __VLS_104 = __VLS_103({ ...{}, inline: ((true)), model: ((__VLS_ctx.subscribeConfig)), ref: ("Subscribe"), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{}, inline: ((true)), model: ((__VLS_ctx.subscribeConfig)), ref: ("Subscribe"), labelWidth: ("120px"), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
// @ts-ignore
(__VLS_ctx.Subscribe);
{
let __VLS_107!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{}, label: ("Topic"), }));
({} as { ElFormItem: typeof __VLS_107; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_107; }).ElFormItem;
const __VLS_109 = __VLS_108({ ...{}, label: ("Topic"), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_109> & Record<string, unknown>) => void)({ ...{}, label: ("Topic"), });
const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109)!;
let __VLS_111!: __VLS_NormalizeEmits<typeof __VLS_110.emit>;
{
let __VLS_112!: 'ElInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElInput : 'elInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elInput : 'el-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElInput'];
const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ ...{}, modelValue: ((__VLS_ctx.subscribeConfig.topic)), }));
({} as { ElInput: typeof __VLS_112; }).ElInput;
({} as { ElInput: typeof __VLS_112; }).ElInput;
const __VLS_114 = __VLS_113({ ...{}, modelValue: ((__VLS_ctx.subscribeConfig.topic)), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_112, typeof __VLS_114> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.subscribeConfig.topic)), });
const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
let __VLS_116!: __VLS_NormalizeEmits<typeof __VLS_115.emit>;
}
(__VLS_110.slots!).default;
}
{
let __VLS_117!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, label: ("QoS"), }));
({} as { ElFormItem: typeof __VLS_117; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_117; }).ElFormItem;
const __VLS_119 = __VLS_118({ ...{}, label: ("QoS"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_117, typeof __VLS_119> & Record<string, unknown>) => void)({ ...{}, label: ("QoS"), });
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
let __VLS_121!: __VLS_NormalizeEmits<typeof __VLS_120.emit>;
{
let __VLS_122!: 'ElSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElSelect : 'elSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elSelect : 'el-select' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-select'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElSelect'];
const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{}, modelValue: ((__VLS_ctx.subscribeConfig.qos)), }));
({} as { ElSelect: typeof __VLS_122; }).ElSelect;
({} as { ElSelect: typeof __VLS_122; }).ElSelect;
const __VLS_124 = __VLS_123({ ...{}, modelValue: ((__VLS_ctx.subscribeConfig.qos)), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.subscribeConfig.qos)), });
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
let __VLS_126!: __VLS_NormalizeEmits<typeof __VLS_125.emit>;
{
let __VLS_127!: 'ElOption' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElOption : 'elOption' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elOption : 'el-option' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-option'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElOption'];
const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ ...{}, label: ("0"), value: ("0"), }));
({} as { ElOption: typeof __VLS_127; }).ElOption;
({} as { ElOption: typeof __VLS_127; }).ElOption;
const __VLS_129 = __VLS_128({ ...{}, label: ("0"), value: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_127, typeof __VLS_129> & Record<string, unknown>) => void)({ ...{}, label: ("0"), value: ("0"), });
const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129)!;
let __VLS_131!: __VLS_NormalizeEmits<typeof __VLS_130.emit>;
}
{
let __VLS_132!: 'ElOption' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElOption : 'elOption' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elOption : 'el-option' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-option'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElOption'];
const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ ...{}, label: ("1"), value: ("1"), }));
({} as { ElOption: typeof __VLS_132; }).ElOption;
({} as { ElOption: typeof __VLS_132; }).ElOption;
const __VLS_134 = __VLS_133({ ...{}, label: ("1"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_132, typeof __VLS_134> & Record<string, unknown>) => void)({ ...{}, label: ("1"), value: ("1"), });
const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134)!;
let __VLS_136!: __VLS_NormalizeEmits<typeof __VLS_135.emit>;
}
{
let __VLS_137!: 'ElOption' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElOption : 'elOption' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elOption : 'el-option' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-option'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElOption'];
const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ ...{}, label: ("2"), value: ("2"), }));
({} as { ElOption: typeof __VLS_137; }).ElOption;
({} as { ElOption: typeof __VLS_137; }).ElOption;
const __VLS_139 = __VLS_138({ ...{}, label: ("2"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_137, typeof __VLS_139> & Record<string, unknown>) => void)({ ...{}, label: ("2"), value: ("2"), });
const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139)!;
let __VLS_141!: __VLS_NormalizeEmits<typeof __VLS_140.emit>;
}
(__VLS_125.slots!).default;
}
(__VLS_120.slots!).default;
}
{
let __VLS_142!: 'ElFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElFormItem : 'elFormItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elFormItem : 'el-form-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-form-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem'];
const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{}, }));
({} as { ElFormItem: typeof __VLS_142; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_142; }).ElFormItem;
const __VLS_144 = __VLS_143({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_142, typeof __VLS_144> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144)!;
let __VLS_146!: __VLS_NormalizeEmits<typeof __VLS_145.emit>;
{
let __VLS_147!: 'ElButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElButton : 'elButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elButton : 'el-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElButton'];
const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ ...{ onClick: {} as any, }, type: ("info"), }));
({} as { ElButton: typeof __VLS_147; }).ElButton;
({} as { ElButton: typeof __VLS_147; }).ElButton;
const __VLS_149 = __VLS_148({ ...{ onClick: {} as any, }, type: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_147, typeof __VLS_149> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("info"), });
const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149)!;
let __VLS_151!: __VLS_NormalizeEmits<typeof __VLS_150.emit>;
let __VLS_152 = { 'click': __VLS_pickEvent(__VLS_151['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_148, typeof __VLS_149>).onClick) };
__VLS_152 = { click: (__VLS_ctx.subscribeMqtt) };
(__VLS_150.slots!).default;
}
(__VLS_145.slots!).default;
}
(__VLS_105.slots!).default;
}
(__VLS_100.slots!).default;
}
{
let __VLS_153!: 'ElMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElMain : 'elMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elMain : 'el-main' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-main'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElMain'];
const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ ...{}, }));
({} as { ElMain: typeof __VLS_153; }).ElMain;
({} as { ElMain: typeof __VLS_153; }).ElMain;
const __VLS_155 = __VLS_154({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_154));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_153, typeof __VLS_155> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155)!;
let __VLS_157!: __VLS_NormalizeEmits<typeof __VLS_156.emit>;
{
let __VLS_158!: 'ElTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTable : 'elTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTable : 'el-table' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTable'];
const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{}, data: ((__VLS_ctx.tableData)), style: ({}), maxHeight: ("250"), }));
({} as { ElTable: typeof __VLS_158; }).ElTable;
({} as { ElTable: typeof __VLS_158; }).ElTable;
const __VLS_160 = __VLS_159({ ...{}, data: ((__VLS_ctx.tableData)), style: ({}), maxHeight: ("250"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_158, typeof __VLS_160> & Record<string, unknown>) => void)({ ...{}, data: ((__VLS_ctx.tableData)), style: ({}), maxHeight: ("250"), });
const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160)!;
let __VLS_162!: __VLS_NormalizeEmits<typeof __VLS_161.emit>;
{
let __VLS_163!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, fixed: (true), prop: ("主题"), label: ("Topic"), width: ("150"), }));
({} as { ElTableColumn: typeof __VLS_163; }).ElTableColumn;
const __VLS_165 = __VLS_164({ ...{}, fixed: (true), prop: ("主题"), label: ("Topic"), width: ("150"), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_165> & Record<string, unknown>) => void)({ ...{}, fixed: (true), prop: ("主题"), label: ("Topic"), width: ("150"), });
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
let __VLS_167!: __VLS_NormalizeEmits<typeof __VLS_166.emit>;
}
{
let __VLS_168!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{}, prop: ("Qos"), label: ("Qos"), width: ("120"), }));
({} as { ElTableColumn: typeof __VLS_168; }).ElTableColumn;
const __VLS_170 = __VLS_169({ ...{}, prop: ("Qos"), label: ("Qos"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_168, typeof __VLS_170> & Record<string, unknown>) => void)({ ...{}, prop: ("Qos"), label: ("Qos"), width: ("120"), });
const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170)!;
let __VLS_172!: __VLS_NormalizeEmits<typeof __VLS_171.emit>;
}
{
let __VLS_173!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, prop: ("时间"), label: ("Time"), width: ("120"), }));
({} as { ElTableColumn: typeof __VLS_173; }).ElTableColumn;
const __VLS_175 = __VLS_174({ ...{}, prop: ("时间"), label: ("Time"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_173, typeof __VLS_175> & Record<string, unknown>) => void)({ ...{}, prop: ("时间"), label: ("Time"), width: ("120"), });
const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175)!;
let __VLS_177!: __VLS_NormalizeEmits<typeof __VLS_176.emit>;
}
{
let __VLS_178!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{}, fixed: ("right"), label: ("操作"), width: ("120"), }));
({} as { ElTableColumn: typeof __VLS_178; }).ElTableColumn;
({} as { ElTableColumn: typeof __VLS_178; }).ElTableColumn;
const __VLS_180 = __VLS_179({ ...{}, fixed: ("right"), label: ("操作"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_178, typeof __VLS_180> & Record<string, unknown>) => void)({ ...{}, fixed: ("right"), label: ("操作"), width: ("120"), });
const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180)!;
let __VLS_182!: __VLS_NormalizeEmits<typeof __VLS_181.emit>;
{
const __VLS_183 = __VLS_intrinsicElements["template"];
const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183);
const __VLS_185 = __VLS_184({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_184));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_183, typeof __VLS_185> & Record<string, unknown>) => void)({ ...{}, });
{
const [scope] = __VLS_getSlotParams((__VLS_181.slots!).default);
{
let __VLS_186!: 'ElButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElButton : 'elButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elButton : 'el-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElButton'];
const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ ...{ onClick: {} as any, }, link: (true), type: ("primary"), size: ("small"), }));
({} as { ElButton: typeof __VLS_186; }).ElButton;
({} as { ElButton: typeof __VLS_186; }).ElButton;
const __VLS_188 = __VLS_187({ ...{ onClick: {} as any, }, link: (true), type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_186, typeof __VLS_188> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, link: (true), type: ("primary"), size: ("small"), });
const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188)!;
let __VLS_190!: __VLS_NormalizeEmits<typeof __VLS_189.emit>;
let __VLS_191 = { 'click': __VLS_pickEvent(__VLS_190['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_187, typeof __VLS_188>).onClick) };
__VLS_191 = {
click: $event => {
__VLS_ctx.deleteRow(scope.$index);
// @ts-ignore
[mqttConfig, mqttConfig, mqttConfig, mqttConfig, mqttConfig, localhost, mqttConfig, localhost, mqttConfig, localhost, mqttConfig, mqttConfig, mqttConfig, mqttConfig, emqx_test, mqttConfig, emqx_test, mqttConfig, emqx_test, mqttConfig, mqttConfig, mqttConfig, mqttConfig, mqttConfig, mqttConfig, mqttConfig, mqttConfig, mqttConfig, connectMqtt, disconnectMqtt, subscribeConfig, subscribeConfig, subscribeConfig, Subscribe, subscribeConfig, subscribeConfig, subscribeConfig, subscribeConfig, subscribeConfig, subscribeConfig, subscribeMqtt, tableData, tableData, tableData, deleteRow,];
}
};
(__VLS_189.slots!).default;
}
}
}
}
(__VLS_161.slots!).default;
}
(__VLS_156.slots!).default;
}
(__VLS_95.slots!).default;
}
(__VLS_90.slots!).default;
}
{
let __VLS_192!: 'ElButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElButton : 'elButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elButton : 'el-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElButton'];
const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...{ onClick: {} as any, }, type: ("success"), }));
({} as { ElButton: typeof __VLS_192; }).ElButton;
({} as { ElButton: typeof __VLS_192; }).ElButton;
const __VLS_194 = __VLS_193({ ...{ onClick: {} as any, }, type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_192, typeof __VLS_194> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("success"), });
const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194)!;
let __VLS_196!: __VLS_NormalizeEmits<typeof __VLS_195.emit>;
let __VLS_197 = { 'click': __VLS_pickEvent(__VLS_196['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_193, typeof __VLS_194>).onClick) };
__VLS_197 = { click: (__VLS_ctx.sendMqttData) };
(__VLS_195.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[sendMqttData,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
mqttConfig: mqttConfig as typeof mqttConfig,
subscribeConfig: subscribeConfig as typeof subscribeConfig,
tableData: tableData as typeof tableData,
connectMqtt: connectMqtt as typeof connectMqtt,
disconnectMqtt: disconnectMqtt as typeof disconnectMqtt,
subscribeMqtt: subscribeMqtt as typeof subscribeMqtt,
sendMqttData: sendMqttData as typeof sendMqttData,
deleteRow: deleteRow as typeof deleteRow,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
}
