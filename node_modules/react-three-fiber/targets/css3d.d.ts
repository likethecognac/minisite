export * from '../index';
export * from '../canvas';
import * as React from 'react';
import { ContainerProps } from './shared/web/ResizeContainer';
declare function CanvasComponent({ children, ...props }: ContainerProps): JSX.Element;
export declare const Canvas: React.MemoExoticComponent<typeof CanvasComponent>;
