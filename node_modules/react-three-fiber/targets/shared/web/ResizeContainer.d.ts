import { Renderer as ThreeRenderer } from 'three';
import * as React from 'react';
import { CanvasProps } from '../../../canvas';
interface Renderer extends Omit<ThreeRenderer, 'domElement'> {
}
export interface ContainerProps extends CanvasProps, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface ResizeContainerProps extends CanvasProps, ContainerProps {
    renderer: () => Renderer | undefined | null;
    effects?: (renderer: any, parent: HTMLDivElement) => () => any;
    preRender?: React.ReactNode;
}
declare function ResizeContainerComponent(props: ResizeContainerProps): JSX.Element;
declare const ResizeContainer: React.MemoExoticComponent<typeof ResizeContainerComponent>;
export { ResizeContainer };
