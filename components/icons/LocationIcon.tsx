import React from "react";
import Svg, { Path } from "react-native-svg";

const LocationIcon = ({ size, fill, ...props }: { size: number; fill: string }): any => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
            <Path
                d="M11.536 3.464a5 5 0 0 1 0 7.072L8 14.07l-3.536-3.535a5 5 0 1 1 7.072-7.072v.001zm1.06 8.132a6.5 6.5 0 1 0-9.192 0l3.535 3.536a1.5 1.5 0 0 0 2.122 0l3.535-3.536zM8 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                fill={fill}
            />
        </Svg>
    );
};
export default LocationIcon;
