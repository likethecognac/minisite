import * as React from 'react';
import { ExpoWebGLRenderingContext } from 'expo-gl';
import { ViewStyle } from 'react-native';
import { CanvasProps } from '../../canvas';
interface NativeCanvasProps extends CanvasProps {
    style?: ViewStyle;
    nativeRef_EXPERIMENTAL?: React.MutableRefObject<any>;
    onContextCreated?: (gl: ExpoWebGLRenderingContext) => Promise<any> | void;
}
declare function CanvasComponent(props: NativeCanvasProps): JSX.Element;
export declare const Canvas: React.MemoExoticComponent<typeof CanvasComponent>;
export {};
