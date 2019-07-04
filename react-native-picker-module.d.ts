// Type definitions for react-native-picker-module 1.0.0
// Project: https://github.com/talut/react-native-picker-module
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 2.8
declare module "react-native-picker-module" {
    import React from 'react';

    interface ReactNativePickerModuleProps {
        value?: any;
        items: any[];
        title?: string;
        ios?: object;
        pickerRef: Function;
        onValueChange: Function;
        cancelButton?: string;
        confirmButton?: string;
    }

    const ReactNativePickerModule: (props: ReactNativePickerModuleProps) => React.Component<ReactNativePickerModuleProps>;
    export default ReactNativePickerModule;
}