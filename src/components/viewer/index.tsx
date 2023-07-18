// import styles from './index.less';
import { useEffect } from 'react';
import {
    RenderingEngine,
    Types,
    Enums,
    setVolumesForViewports,
    volumeLoader,
  } from '@cornerstonejs/core';
import {
    addTool,
    BrushTool,
    SegmentationDisplayTool,
    BidirectionalTool,
    ToolGroupManager,
    WindowLevelTool,
    ZoomTool,
    segmentation,
    Enums as csToolsEnums,
} from '@cornerstonejs/tools';
import initProviders from './initProviders';
import initCornerstoneDICOMImageLoader from './initCornerstoneDICOMImageLoader';
import initVolumeLoader from './initVolumeLoader';
import { init as csRenderInit } from '@cornerstonejs/core';
import { init as csToolsInit } from '@cornerstonejs/tools';
const { ViewportType } = Enums;

const renderLoad = () => {

};
const initDemo = async () => {
    initProviders();
    initCornerstoneDICOMImageLoader();
    initVolumeLoader();
    await csRenderInit();
    await csToolsInit();
    renderLoad();
};

useEffect(() => {
    initDemo();
}, []);
const Viewer = () => {
    return (<div>hello viewer</div>)
};
export default Viewer;